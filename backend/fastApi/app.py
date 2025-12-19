import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Optional
import pandas as pd

from model import train_and_save_model, load_model, predict_from_dict, MODEL_FILE

app = FastAPI(title="Crop Recommendation API")

# Allow requests from the frontend dev server (Vite default: 5173)
origins = [
    "http://localhost:5173",
    "http://localhost:5176",
    "http://127.0.0.1:5173",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:5175",
    "http://127.0.0.1:5175",
    "http://127.0.0.1:5176",
]
# For local development allow origins above; fallback to allow all if list is empty
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins or ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Try to load model on startup; if not present, train using the CSV in this folder
MODEL_PATH = os.path.join(os.path.dirname(__file__), MODEL_FILE)
CSV_PATH = os.path.join(os.path.dirname(__file__), "Crop_recommendation_encoded.csv")

model = None
metadata = None
label_map = None


class PredictRequest(BaseModel):
    nitrogen: float = Field(..., example=90)
    phosphorus: float = Field(..., example=42)
    potassium: float = Field(..., example=43)
    temperature: float = Field(..., example=23.5)
    humidity: float = Field(..., example=82.0)
    ph: float = Field(..., example=6.5)
    rainfall: float = Field(..., example=200.0)


@app.on_event("startup")
async def startup_event():
    global model, metadata, label_map
    try:
        model, metadata, label_map = load_model(MODEL_PATH)
        print("Loaded model from disk")
    except Exception:
        # Attempt to train
        try:
            res = train_and_save_model(CSV_PATH, MODEL_PATH)
            model, metadata, label_map = load_model(MODEL_PATH)
            print("Model trained on startup:", res)
        except Exception as e:
            print("Startup: failed to train or load model:", e)


@app.get("/health")
async def health():
    return {"status": "ok", "model_loaded": model is not None}


@app.post("/train")
async def train():
    try:
        res = train_and_save_model(CSV_PATH, MODEL_PATH)
        # reload
        global model, metadata, label_map
        model, metadata, label_map = load_model(MODEL_PATH)
        return {"status": "trained", **res}
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/model")
async def model_info():
    if metadata is None:
        raise HTTPException(status_code=503, detail="Model not loaded")
    # Return useful metadata and a small sample of the label map
    lm_sample = None
    try:
        lm_sample = dict(list(label_map.items())[:20]) if label_map else {}
    except Exception:
        lm_sample = {}
    return {"model_loaded": model is not None, "metadata": metadata, "label_map_sample": lm_sample}


@app.post("/predict")
async def predict(req: PredictRequest):
    if model is None:
        raise HTTPException(status_code=503, detail="Model not available. Call /train or check server logs.")
    try:
        inp = req.dict()
        pred_encoded, confidence = predict_from_dict(model, inp)
        crop_name = label_map.get(pred_encoded, str(pred_encoded)) if label_map else str(pred_encoded)
        return {"predicted_crop": crop_name, "predicted_code": pred_encoded, "confidence": confidence}
    except KeyError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="0.0.0.0", port=8001, reload=True)
