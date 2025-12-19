from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from geopy.distance import geodesic
import requests
import math

app = Flask(__name__)
# For local development allow all origins to avoid CORS issues; for production restrict explicitly.
# NOTE: When using credentials (cookies/auth), use a specific origin instead of "*".
CORS(app, resources={r"/soil": {"origins": "*"}}, supports_credentials=False)

# Load your dataset (resolve path relative to this file)
import os
DATA_PATH = os.path.join(os.path.dirname(__file__), 'soil_data.csv')
if not os.path.exists(DATA_PATH):
    print(f"Warning: Soil data not found at {DATA_PATH}. The /soil endpoint will return 404 until data is provided.")
    data = None
else:
    try:
        data = pd.read_csv(DATA_PATH)
    except pd.errors.EmptyDataError:
        print(f"Warning: Soil data file at {DATA_PATH} is empty. The /soil endpoint will return 404 until data is provided.")
        data = None


def fetch_soilgrids(lat, lon):
    """Attempt to fetch soil properties from SoilGrids and return a compact dict.
    Returns keys: pH, sand, clay, silt, organic_carbon (or empty dict on failure).
    This function is tolerant of different JSON shapes returned by the SoilGrids API.
    """
    url = f"https://rest.isric.org/soilgrids/v2.0/properties/query?lat={lat}&lon={lon}"
    try:
        resp = requests.get(url, timeout=6)
        resp.raise_for_status()
        data_json = resp.json()
        layers = data_json.get('properties', {}).get('layers', {})

        def extract_value(candidates):
            for name in candidates:
                layer = layers.get(name)
                if not layer:
                    continue
                depths = layer.get('depths') or []
                if depths:
                    first = depths[0]
                    # depth entry can have 'values' dict or 'mean' directly
                    vals = first.get('values')
                    if isinstance(vals, dict):
                        # prefer 'mean'
                        if 'mean' in vals:
                            return vals['mean']
                        # otherwise pick any numeric
                        for v in vals.values():
                            if isinstance(v, (int, float)):
                                return v
                    # sometimes 'mean' is provided directly
                    if 'mean' in first and isinstance(first['mean'], (int, float)):
                        return first['mean']
            return None

        result = {
            'pH': extract_value(['phh2o', 'ph']),
            'sand': extract_value(['sand']),
            'clay': extract_value(['clay']),
            'silt': extract_value(['silt']),
            'organic_carbon': extract_value(['soc', 'ocd', 'oc'])
        }

        # Convert to floats where possible
        for k, v in list(result.items()):
            try:
                result[k] = float(v) if v is not None else None
            except:
                result[k] = None

        return result
    except Exception as e:
        print("SoilGrids fetch failed:", e)
        return {}


@app.route('/soil', methods=['GET'])
def get_soil_properties():
    if data is None:
        return jsonify({"error": "Soil data not available on server"}), 404
    try:
        lat = float(request.args.get('lat'))
        lon = float(request.args.get('lon'))
    except:
        return jsonify({"error": "Please provide valid lat and lon"}), 400

    # Find nearest point in dataset
    data['distance'] = data.apply(
        lambda row: geodesic((lat, lon), (row.latitude, row.longitude)).km,
        axis=1
    )
    nearest = data.loc[data['distance'].idxmin()]

    # Prepare response
    soil = {
        "pH": getattr(nearest, 'soil_pH', None),
        "organic_carbon": getattr(nearest, 'organic_carbon', None),
        "sand": getattr(nearest, 'sand', None),
        "clay": getattr(nearest, 'clay', None),
        "silt": getattr(nearest, 'silt', None),
        "N": getattr(nearest, 'N', None),
        "P": getattr(nearest, 'P', None),
        "K": getattr(nearest, 'K', None),
        "temperature": getattr(nearest, 'temperature', None),
        "humidity": getattr(nearest, 'humidity', None),
        "rainfall": getattr(nearest, 'rainfall', None),
    }

    # Try SoilGrids and merge values for missing fields
    sg = fetch_soilgrids(lat, lon)

    def is_missing(v):
        return v is None or (isinstance(v, float) and math.isnan(v))

    for key_map in [('pH', 'pH'), ('organic_carbon', 'organic_carbon'), ('sand', 'sand'), ('clay', 'clay'), ('silt', 'silt')]:
        local_key, sg_key = key_map
        if is_missing(soil.get(local_key)) and sg.get(sg_key) is not None:
            soil[local_key] = sg.get(sg_key)

    response = {
        "lat": lat,
        "lon": lon,
        "nearest_point": {
            "latitude": nearest.latitude,
            "longitude": nearest.longitude,
            "distance_km": round(nearest.distance, 2)
        },
        "soil": soil,
        "soilgrids": sg  # include raw soilgrids values for debugging/fallback
    }

    return jsonify(response)

if __name__ == '__main__':
    # Use a dedicated port to avoid conflicts with other local servers
    PORT = 5001
    print(f"Starting soil service on http://127.0.0.1:{PORT}")
    app.run(debug=True, port=PORT)
