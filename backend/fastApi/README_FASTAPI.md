Crop Recommendation FastAPI

Quick start:

1. Create a Python venv and install dependencies:

   python -m venv .venv
   .\.venv\Scripts\activate  # Windows
   pip install -r requirements.txt

2. Start the API:

   uvicorn app:app --reload --port 8001

3. Endpoints:

   GET  /health     -> health check
   GET  /model      -> returns model metadata and a sample of label mappings
   POST /train      -> triggers training on `Crop_recommendation_encoded.csv`
   POST /predict    -> accepts JSON body with features:

      {
        "nitrogen": 90,
        "phosphorus": 42,
        "potassium": 43,
        "temperature": 23.5,
        "humidity": 82.0,
        "ph": 6.5,
        "rainfall": 202.9
      }

   Returns predicted crop name, encoded class and confidence.

Notes:
- The app trains automatically on startup if no `model.joblib` exists and `Crop_recommendation_encoded.csv` is present.
- You can retrain by calling `POST /train` (may take a few seconds).
