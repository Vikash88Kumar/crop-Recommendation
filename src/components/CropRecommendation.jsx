import React, { useState } from "react";
import { Sliders, MapPin, Loader2, Sparkles } from "lucide-react";
import axios from "axios";

/* ------------------ STATIC DATA ------------------ */

const crops = [
  {
    id: "apple",
    name: "Apple",
    description: "Excellent choice for your current soil and climate conditions",
    match: 92,
    expectedYield: "4.5 tons/acre",
    duration: "120–150 days",
    season: "Kharif",
    waterNeed: "High",
    profitability: "High",
    image:
      "https://t3.ftcdn.net/jpg/02/36/88/12/360_F_236881295_odo9H1vtTZUvewumPdeRE4tHUtVa2UJg.jpg",
  },
  {
    id: "wheat",
    name: "Wheat",
    description: "Good option with moderate water requirements",
    match: 85,
    expectedYield: "3.2 tons/acre",
    duration: "110–130 days",
    season: "Rabi",
    waterNeed: "Medium",
    profitability: "Medium",
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&fit=crop",
  },

  // 🌾 Cereals
  {
    id: "rice",
    name: "Rice",
    description: "Best suited for warm and humid conditions",
    match: 90,
    expectedYield: "4–6 tons/acre",
    duration: "120–150 days",
    season: "Kharif",
    waterNeed: "Very High",
    profitability: "High",
    image: "https://images.unsplash.com/photo-1592997571659-0b21ff64313b?w=400",
  },
  {
    id: "maize",
    name: "Maize",
    description: "Adaptable crop with high productivity",
    match: 88,
    expectedYield: "3–4 tons/acre",
    duration: "90–110 days",
    season: "Kharif",
    waterNeed: "Medium",
    profitability: "High",
    image: "https://images.unsplash.com/photo-1602526432604-029a709e131c?w=400",
  },

  // 🌱 Pulses
  {
    id: "chickpea",
    name: "Chickpea",
    description: "Improves soil fertility with nitrogen fixation",
    match: 82,
    expectedYield: "1.8 tons/acre",
    duration: "100–120 days",
    season: "Rabi",
    waterNeed: "Low",
    profitability: "Medium",
    image: "https://images.unsplash.com/photo-1582515073490-39981397c445?w=400",
  },
  {
    id: "kidneybeans",
    name: "Kidney Beans",
    description: "High protein pulse crop",
    match: 80,
    expectedYield: "1.5 tons/acre",
    duration: "90–120 days",
    season: "Kharif",
    waterNeed: "Medium",
    profitability: "Medium",
    image: "https://images.unsplash.com/photo-1615486364462-ef6363adbc18?w=400",
  },
  {
    id: "mothbeans",
    name: "Mothbeans",
    description: "Drought-resistant pulse crop",
    match: 78,
    expectedYield: "1.2 tons/acre",
    duration: "70–90 days",
    season: "Kharif",
    waterNeed: "Low",
    profitability: "Medium",
    image: "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?w=400",
  },
  {
    id: "pigeonpeas",
    name: "Pigeon Peas",
    description: "Long-duration pulse crop",
    match: 83,
    expectedYield: "2 tons/acre",
    duration: "150–180 days",
    season: "Kharif",
    waterNeed: "Medium",
    profitability: "High",
    image: "https://images.unsplash.com/photo-1620146344904-097ad4c54e40?w=400",
  },
  {
    id: "mungbean",
    name: "Mung Bean",
    description: "Short-duration green gram crop",
    match: 84,
    expectedYield: "1.4 tons/acre",
    duration: "60–70 days",
    season: "Kharif",
    waterNeed: "Low",
    profitability: "Medium",
    image: "https://images.unsplash.com/photo-1615486364462-ef6363adbc18?w=400",
  },
  {
    id: "blackgram",
    name: "Black Gram",
    description: "Protein-rich pulse crop",
    match: 81,
    expectedYield: "1.3 tons/acre",
    duration: "70–90 days",
    season: "Kharif",
    waterNeed: "Low",
    profitability: "Medium",
    image: "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?w=400",
  },
  {
    id: "lentil",
    name: "Lentil",
    description: "Cool-season pulse crop",
    match: 79,
    expectedYield: "1.2 tons/acre",
    duration: "100–110 days",
    season: "Rabi",
    waterNeed: "Low",
    profitability: "Medium",
    image: "https://images.unsplash.com/photo-1582515073490-39981397c445?w=400",
  },

  // 🍎 Fruits
  {
    id: "pomegranate",
    name: "Pomegranate",
    description: "High-value fruit crop",
    match: 87,
    expectedYield: "8–10 tons/acre",
    duration: "Perennial",
    season: "All",
    waterNeed: "Medium",
    profitability: "High",
    image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400",
  },
  {
    id: "banana",
    name: "Banana",
    description: "Fast-growing tropical fruit crop",
    match: 90,
    expectedYield: "20–25 tons/acre",
    duration: "12–15 months",
    season: "All",
    waterNeed: "High",
    profitability: "High",
    image: "https://images.unsplash.com/photo-1574226516831-e1dff420e42e?w=400",
  },
  {
    id: "mango",
    name: "Mango",
    description: "King of fruits with high market demand",
    match: 88,
    expectedYield: "8–12 tons/acre",
    duration: "Perennial",
    season: "Summer",
    waterNeed: "Medium",
    profitability: "High",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400",
  },
  {
    id: "grapes",
    name: "Grapes",
    description: "Suitable for warm and dry climate",
    match: 86,
    expectedYield: "10–15 tons/acre",
    duration: "Perennial",
    season: "Winter",
    waterNeed: "Medium",
    profitability: "High",
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400",
  },
  {
    id: "watermelon",
    name: "Watermelon",
    description: "Summer fruit with high water content",
    match: 85,
    expectedYield: "15–20 tons/acre",
    duration: "90–100 days",
    season: "Summer",
    waterNeed: "High",
    profitability: "Medium",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400",
  },
  {
    id: "muskmelon",
    name: "Muskmelon",
    description: "Heat-loving fruit crop",
    match: 84,
    expectedYield: "10–12 tons/acre",
    duration: "80–90 days",
    season: "Summer",
    waterNeed: "Medium",
    profitability: "Medium",
    image: "https://images.unsplash.com/photo-1629385701021-25b32e9a5e63?w=400",
  },
  {
    id: "orange",
    name: "Orange",
    description: "Citrus fruit crop with good export value",
    match: 86,
    expectedYield: "10–14 tons/acre",
    duration: "Perennial",
    season: "Winter",
    waterNeed: "Medium",
    profitability: "High",
    image: "https://images.unsplash.com/photo-1580910051074-7a5c54f8f99b?w=400",
  },
  {
    id: "papaya",
    name: "Papaya",
    description: "Fast-growing tropical fruit",
    match: 88,
    expectedYield: "18–22 tons/acre",
    duration: "9–12 months",
    season: "All",
    waterNeed: "High",
    profitability: "High",
    image: "https://images.unsplash.com/photo-1605027990121-3c7c8d5b7b44?w=400",
  },
  {
    id: "coconut",
    name: "Coconut",
    description: "Long-term plantation crop",
    match: 82,
    expectedYield: "6–8 tons/acre",
    duration: "Perennial",
    season: "All",
    waterNeed: "High",
    profitability: "High",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=400",
  },

  // 🌾 Cash Crops
  {
    id: "cotton",
    name: "Cotton",
    description: "Major fiber crop",
    match: 83,
    expectedYield: "2.5 tons/acre",
    duration: "160–180 days",
    season: "Kharif",
    waterNeed: "Medium",
    profitability: "High",
    image: "https://images.unsplash.com/photo-1602526217611-5f8c8c2c4d4b?w=400",
  },
  {
    id: "jute",
    name: "Jute",
    description: "Natural fiber crop",
    match: 80,
    expectedYield: "2 tons/acre",
    duration: "120–140 days",
    season: "Kharif",
    waterNeed: "High",
    profitability: "Medium",
    image: "https://images.unsplash.com/photo-1598514983318-4f34b89bb3a2?w=400",
  },
  {
    id: "coffee",
    name: "Coffee",
    description: "High-value plantation crop",
    match: 85,
    expectedYield: "1.2 tons/acre",
    duration: "Perennial",
    season: "All",
    waterNeed: "Medium",
    profitability: "High",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400",
  },
];


/* ------------------ COMPONENT ------------------ */

export default function CropRecommendationDashboard() {
  const [form, setForm] = useState({
    N: 40,
    P: 30,
    K: 60,
    pH: 7,
    rainfall: 200,
    temperature: 25,
    humidity: 50,
  });

  const [address, setAddress] = useState("");
  const [location, setLocation] = useState({ lat: "", lon: "" });
  const [useAutoLocation, setUseAutoLocation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [soilAutoFilled, setSoilAutoFilled] = useState({ pH:false, N:false, P:false, K:false, rainfall:false, temperature:false, humidity:false });

  const updateForm = (key, value) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  // Clear auto-filled indicator when user manually edits a field
  const onManualChange = (key, val) => {
    setSoilAutoFilled((prev) => ({ ...prev, [key]: false }));
    updateForm(key, val);
  };

  /* ------------------ LOCATION HANDLERS ------------------ */

  const fetchSoilProperties = async (lat, lon) => {
    // Primary: query SoilGrids directly; Secondary: fallback to local /soil endpoint for nutrients/weather
    try {
      // Implement a small retry/backoff loop because SoilGrids can be intermittently unavailable (502)
      const maxAttempts = 3;
      let sgRes = null;
      for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
          sgRes = await axios.get("https://rest.isric.org/soilgrids/v2.0/properties/query", {
            params: { lat, lon },
            timeout: 7000,
            headers: { Accept: "application/json" },
            responseType: "json",
          });
          break; // success
        } catch (err) {
          const status = err?.response?.status;
          // Retry on server errors (5xx) or no response (network)
          if (attempt < maxAttempts && (status === 502 || (status >= 500 && status < 600) || !err?.response)) {
            const delay = 300 * Math.pow(2, attempt - 1); // 300ms, 600ms, ...
            console.warn(`SoilGrids attempt ${attempt} failed (${status || err.message}), retrying in ${delay}ms`);
            await new Promise((r) => setTimeout(r, delay));
            continue;
          }
          // No more retries or not a retriable error — rethrow to be handled by outer catch
          throw err;
        }
      }

      if (!sgRes) throw new Error("SoilGrids unreachable after retries");

      const layers = sgRes.data?.properties?.layers || {};

      const extractValue = (candidates) => {
        for (const name of candidates) {
          const layer = layers[name];
          if (!layer) continue;
          const depths = layer.depths || [];
          if (depths.length > 0) {
            const first = depths[0];
            const vals = first.values;
            if (vals && typeof vals === "object") {
              if (typeof vals.mean === "number") return vals.mean;
              for (const k of Object.keys(vals)) {
                if (typeof vals[k] === "number") return vals[k];
              }
            }
            if (typeof first.mean === "number") return first.mean;
          }
        }
        return null;
      };

      // SoilGrids commonly exposes phh2o/ph, sand, clay, silt, soc (organic carbon)
      const sg_pH = extractValue(["phh2o", "ph"]);
      const sg_sand = extractValue(["sand"]);
      const sg_clay = extractValue(["clay"]);
      const sg_silt = extractValue(["silt"]);
      const sg_oc = extractValue(["soc", "ocd", "oc"]);

      // Apply pH if available
      if (sg_pH != null) {
        const phVal = Number(Number(sg_pH).toFixed(2));
        updateForm("pH", phVal);
        setSoilAutoFilled((prev) => ({ ...prev, pH: true }));
      }

      // Apply texture/OC if present (optional)
      if (sg_sand != null) {
        // store sand/clay/silt in console for now (no UI fields)
        console.log("SoilGrids sand:", sg_sand);
      }
      if (sg_clay != null) console.log("SoilGrids clay:", sg_clay);
      if (sg_silt != null) console.log("SoilGrids silt:", sg_silt);
      if (sg_oc != null) console.log("SoilGrids organic carbon:", sg_oc);

      // SoilGrids doesn't provide N,P,K/temperature/humidity/rainfall; fetch local soil service only for these if available
      let needLocal = false;
      if (typeof form.N === "undefined" || form.N == null) needLocal = true;
      if (typeof form.P === "undefined" || form.P == null) needLocal = true;
      if (typeof form.K === "undefined" || form.K == null) needLocal = true;
      if (needLocal) {
        try {
          const res = await axios.get("http://127.0.0.1:5001/soil", {
            params: { lat, lon },
            withCredentials: false,
            timeout: 7000,
          });
          const soil = res.data?.soil;
          if (soil) {
            if (typeof soil.N !== "undefined" && soil.N != null) {
              updateForm("N", Number(soil.N));
              setSoilAutoFilled((prev) => ({ ...prev, N: true }));
            }
            if (typeof soil.P !== "undefined" && soil.P != null) {
              updateForm("P", Number(soil.P));
              setSoilAutoFilled((prev) => ({ ...prev, P: true }));
            }
            if (typeof soil.K !== "undefined" && soil.K != null) {
              updateForm("K", Number(soil.K));
              setSoilAutoFilled((prev) => ({ ...prev, K: true }));
            }
            if (typeof soil.temperature !== "undefined" && soil.temperature != null) {
              updateForm("temperature", Number(soil.temperature));
              setSoilAutoFilled((prev) => ({ ...prev, temperature: true }));
            }
            if (typeof soil.humidity !== "undefined" && soil.humidity != null) {
              updateForm("humidity", Number(soil.humidity));
              setSoilAutoFilled((prev) => ({ ...prev, humidity: true }));
            }
            if (typeof soil.rainfall !== "undefined" && soil.rainfall != null) {
              updateForm("rainfall", Number(soil.rainfall));
              setSoilAutoFilled((prev) => ({ ...prev, rainfall: true }));
            }
          }
        } catch (err) {
          // Local service may be unavailable — not fatal, keep SoilGrids pH if we got it
          console.warn("Local soil service fallback failed:", err?.response?.data || err.message || err);
        }
      }

      console.log("Soil properties auto-filled from SoilGrids/local:", { pH: sg_pH, sand: sg_sand, clay: sg_clay, silt: sg_silt, oc: sg_oc });
    } catch (err) {
      // If SoilGrids fails, fallback to local soil service (existing behavior)
      console.warn("SoilGrids fetch failed, falling back to local soil service:", err?.message || err);
      try {
        const res = await axios.get("http://127.0.0.1:5001/soil", {
          params: { lat, lon },
          withCredentials: false,
          timeout: 7000,
        });
        const soil = res.data?.soil;
        if (soil) {
          // pH
          if (typeof soil.pH !== "undefined" && soil.pH != null) {
            const phVal = Number(Number(soil.pH).toFixed(2));
            console.log("Fetched soil pH:", phVal);
            updateForm("pH", phVal);
            setSoilAutoFilled((prev) => ({ ...prev, pH: true }));
          }
          // N, P, K
          if (typeof soil.N !== "undefined" && soil.N != null) {
            updateForm("N", Number(soil.N));
            setSoilAutoFilled((prev) => ({ ...prev, N: true }));
          }
          if (typeof soil.P !== "undefined" && soil.P != null) {
            updateForm("P", Number(soil.P));
            setSoilAutoFilled((prev) => ({ ...prev, P: true }));
          }
          if (typeof soil.K !== "undefined" && soil.K != null) {
            updateForm("K", Number(soil.K));
            setSoilAutoFilled((prev) => ({ ...prev, K: true }));
          }
          // Weather fields
          if (typeof soil.temperature !== "undefined" && soil.temperature != null) {
            updateForm("temperature", Number(soil.temperature));
            setSoilAutoFilled((prev) => ({ ...prev, temperature: true }));
          }
          if (typeof soil.humidity !== "undefined" && soil.humidity != null) {
            updateForm("humidity", Number(soil.humidity));
            setSoilAutoFilled((prev) => ({ ...prev, humidity: true }));
          }
          if (typeof soil.rainfall !== "undefined" && soil.rainfall != null) {
            updateForm("rainfall", Number(soil.rainfall));
            setSoilAutoFilled((prev) => ({ ...prev, rainfall: true }));
          }
          console.log("Soil properties auto-filled:", soil);
        }
      } catch (err2) {
        // If server returned 404 it means soil dataset is not available
        if (err2?.response?.status === 404) {
          alert("Soil data not available on server. Please enter pH manually.");
          return;
        }

        // Handle CORS/Network errors (no response)
        if (err2?.request && !err2?.response) {
          console.warn("Network/CORS error while fetching soil properties:", err2.message || err2);
          alert("Unable to fetch soil properties due to network/CORS error. Please ensure the soil API is running and CORS allows this origin.");
          return;
        }

        console.warn("Failed to fetch soil properties:", err2?.response?.data || err2.message || err2);
        // Not a hard failure — let user continue with manual inputs
      }
    }
  };

  const locateByAddress = async () => {
    if (!address.trim()) return alert("Enter a location");
    setLoading(true);

    try {
      const geo = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          address
        )}&key=fe374164057747f08ac4e8924f292e3e`
      );

      const lat = geo.data.results[0].geometry.lat;
      const lon = geo.data.results[0].geometry.lng;
      setLocation({ lat, lon });
      // fetch soil properties automatically
      await fetchSoilProperties(lat, lon);
    } catch {
      alert("Failed to fetch location");
    } finally {
      setLoading(false);
    }
  };

  const autoLocate = () => {
    if (!navigator.geolocation) return alert("Geolocation not supported");
    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        setLocation({ lat: coords.latitude, lon: coords.longitude });
        // fetch soil properties automatically
        await fetchSoilProperties(coords.latitude, coords.longitude);
        setLoading(false);
      },
      () => {
        setLoading(false);
        alert("Location access denied");
      }
    );
  };

  const recommendCrops = async () => {
    setLoading(true);
    try {
      // Map our form fields to the FastAPI expected payload
      const payload = {
        nitrogen: Number(form.N),
        phosphorus: Number(form.P),
        potassium: Number(form.K),
        temperature: Number(form.temperature),
        humidity: Number(form.humidity),
        ph: Number(form.pH),
        rainfall: Number(form.rainfall),
      };

      const res = await axios.post("http://127.0.0.1:8001/predict", payload);
      // Expecting: { predicted_crop, predicted_code, confidence }
      setPrediction(res.data);
    } catch (err) {
      console.error(err?.response?.data || err.message || err);
      alert("Prediction failed: " + (err?.response?.data?.detail || err.message || "check console"));
    } finally {
      setLoading(false);
    }
  };

  /* ------------------ UI ------------------ */

  return (
    <div className="min-h-screen bg-slate-50 p-6 grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6">
      {/* ================= SIDEBAR ================= */}
      <aside className="bg-white rounded-2xl border shadow-sm p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Crop Recommendation
          </h1>
          <p className="text-sm text-slate-500">
            Personalised insights using soil & climate data
          </p>
        </div>

        {/* Soil Nutrients */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-700 flex items-center gap-2">
            <Sliders className="w-4 h-4" />
            Soil Nutrients (ppm)
          </h3>

          {["N", "P", "K"].map((key) => (
            <div key={key}>
              <div className="flex justify-between text-xs text-slate-600 mb-1">
                <span>{key}</span>
                <span>{form[key]} ppm</span>
              </div>
              <input
                type="range"
                min="0"
                max="400"
                value={form[key]}
                disabled={loading}
                onChange={(e) => onManualChange(key, Number(e.target.value))}
                className="w-full accent-slate-900"
              />
            </div>
          ))}
        </div>

        {/* Environmental Inputs */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "pH", key: "pH" },
            { label: "Rainfall", key: "rainfall" },
            { label: "Temp (°C)", key: "temperature" },
            { label: "Humidity", key: "humidity" },
          ].map(({ label, key }) => (
            <div key={key}>
              <label className="text-xs text-slate-600">{label}</label>
              <input
                type="number"
                value={form[key]}
                disabled={loading}
                onChange={(e) => onManualChange(key, Number(e.target.value))}
                className="w-full mt-1 rounded-lg border px-2 py-1 text-sm"
              />
            </div>
          ))}
        </div>

        {/* Location Preference */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-700">
            Location Preference
          </h3>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={useAutoLocation}
              onChange={(e) => setUseAutoLocation(e.target.checked)}
              className="accent-slate-900"
            />
            Use my current location automatically
          </label>

          {!useAutoLocation && (
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter village / city / district"
              className="w-full rounded-lg border px-3 py-2 text-sm"
            />
          )}

          {useAutoLocation ? (
            <button
              onClick={autoLocate}
              disabled={loading}
              className="w-full py-2 rounded-lg border hover:bg-slate-100 flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              Fetch Location Automatically
            </button>
          ) : (
            <button
              onClick={locateByAddress}
              disabled={loading}
              className="w-full py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800"
            >
              Submit Location
            </button>
          )}

          {location.lat && (
            <div className="text-xs text-slate-500">
              Lat: {location.lat} • Lon: {location.lon}
              <span className="ml-3 inline-flex gap-2 items-center">
                {Object.entries(soilAutoFilled).map(([k, v]) =>
                  v ? (
                    <span key={k} className="inline-block px-2 py-0.5 text-xs bg-emerald-100 text-emerald-700 rounded capitalize">
                      {k} auto-filled
                    </span>
                  ) : null
                )}
              </span>
            </div>
          )}
        </div>

        {/* CTA */}
        <button
          onClick={recommendCrops}
          disabled={loading}
          className="w-full py-3 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 flex items-center justify-center gap-2"
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Sparkles className="w-4 h-4" />
          )}
          Get Recommendations
        </button>
      </aside>

      {/* ================= RESULTS ================= */}
      <main className="bg-white rounded-2xl border shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Recommended Crops</h2>

        {!prediction ? (
          <p className="text-slate-500">
            Fill the details and click “Get Recommendations”
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(() => {
              const predictedName = prediction.predicted_crop || prediction;
              const matched = crops.filter((c) => c.id === predictedName.toLowerCase());
              if (matched.length > 0) {
                return matched.map((crop) => (
                  <div
                    key={crop.id}
                    className="rounded-xl border overflow-hidden hover:shadow-md transition"
                  >
                    <img
                      src={crop.image}
                      alt={crop.name}
                      className="h-44 w-full object-cover"
                    />
                    <div className="p-4 space-y-2">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">{crop.name}</h3>
                        <span className="text-xs px-2 py-1 rounded bg-emerald-100 text-emerald-700">
                          {crop.match}% match
                        </span>
                      </div>
                      <p className="text-sm text-slate-600">{crop.description}</p>
                    </div>
                  </div>
                ));
              }

              // Fallback: unknown crop — show simple result card
              return (
                <div className="rounded-xl border p-6">
                  <h3 className="text-xl font-semibold">{predictedName}</h3>
                  <p className="text-sm text-slate-600 mt-2">Predicted crop</p>
                  <div className="mt-4">
                    <strong>Confidence:</strong> {(prediction.confidence * 100).toFixed(0)}%
                  </div>
                  <div className="mt-3 text-sm text-slate-500">
                    This crop is not in the local database; consider adding details for richer recommendations.
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </main>
    </div>
  );
}
