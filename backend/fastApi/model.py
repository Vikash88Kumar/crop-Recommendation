import os
from typing import Tuple, Dict
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import joblib

FEATURE_COLS = [
    "Nitrogen",
    "Phosphorus",
    "potassium",
    "temperature(in c)",
    "humidity(%)",
    "ph",
    "rainfall(mm)",
]

MODEL_FILE = "model.joblib"


def train_and_save_model(csv_path: str = "Crop_recommendation_encoded.csv", model_path: str = MODEL_FILE) -> Dict:
    """Train a RandomForest model on the provided CSV and save the fitted model + metadata.

    Returns a dict with training metrics and the path to the saved model.
    """
    if not os.path.exists(csv_path):
        raise FileNotFoundError(f"CSV file not found: {csv_path}")

    df = pd.read_csv(csv_path)

    # Basic validation
    for c in FEATURE_COLS + ["crop_encoded", "crop"]:
        if c not in df.columns:
            raise ValueError(f"Required column missing in CSV: {c}")

    X = df[FEATURE_COLS].values
    y = df["crop_encoded"].values

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.15, random_state=42, stratify=y)

    model = RandomForestClassifier(n_estimators=200, random_state=42)
    model.fit(X_train, y_train)

    y_pred = model.predict(X_test)
    acc = float(accuracy_score(y_test, y_pred))

    # Create label map (encoded -> crop name)
    label_map = dict(df[["crop_encoded", "crop"]].drop_duplicates().values)

    # Save model and a metadata object including training metrics
    metadata = {
        "feature_cols": FEATURE_COLS,
        "accuracy": acc,
        "n_classes": int(model.n_classes_),
    }

    to_save = {
        "model": model,
        "metadata": metadata,
        "label_map": label_map,
    }

    joblib.dump(to_save, model_path)

    return {"model_path": model_path, "accuracy": acc, "n_classes": int(model.n_classes_)}


def load_model(model_path: str = MODEL_FILE):
    if not os.path.exists(model_path):
        raise FileNotFoundError(f"Model file not found: {model_path}")
    data = joblib.load(model_path)
    model = data.get("model")
    metadata = data.get("metadata", {})
    label_map = data.get("label_map", {})
    return model, metadata, label_map


def predict_from_dict(model, input_dict: dict):
    # Accept either full feature names or friendly names
    mapping = {
        "nitrogen": "Nitrogen",
        "phosphorus": "Phosphorus",
        "potassium": "potassium",
        "temperature": "temperature(in c)",
        "humidity": "humidity(%)",
        "ph": "ph",
        "rainfall": "rainfall(mm)",
    }

    row = []
    for friendly in ["nitrogen", "phosphorus", "potassium", "temperature", "humidity", "ph", "rainfall"]:
        # try friendly key, then exact feature column
        if friendly in input_dict:
            row.append(float(input_dict[friendly]))
        elif mapping[friendly] in input_dict:
            row.append(float(input_dict[mapping[friendly]]))
        else:
            raise KeyError(f"Missing feature in input: {friendly}")

    X = np.array(row).reshape(1, -1)
    probs = model.predict_proba(X)[0]
    pred_encoded = int(model.predict(X)[0])

    # Need to map encoded labels to crop names — the CSV contains 'crop' per encoded value, but model does not include mapping.
    # It's better to create a mapping file when training; here we attempt to infer mapping from training CSV if available.
    return pred_encoded, float(probs.max())
