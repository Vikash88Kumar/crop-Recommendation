import { Router } from "express";
import fetch from "node-fetch"; // node-fetch provides fetch in older node versions; package may exist, otherwise use global fetch

const router = Router();

// Simple in-memory cache
const cache = new Map();
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes

const fetchWithTimeout = async (url, opts = {}, ms = 7000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), ms);
  try {
    const res = await fetch(url, { ...opts, signal: controller.signal });
    clearTimeout(id);
    return res;
  } catch (err) {
    clearTimeout(id);
    throw err;
  }
};

const extractValue = (layers, candidates) => {
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

router.get("/", async (req, res) => {
  const lat = req.query.lat;
  const lon = req.query.lon;
  if (!lat || !lon) return res.status(400).json({ error: "lat and lon query params required" });

  const key = `${lat}:${lon}`;
  const cached = cache.get(key);
  if (cached && Date.now() - cached.ts < CACHE_TTL_MS) {
    return res.json({ source: cached.source, data: cached.data });
  }

  // Try SoilGrids with retries
  const url = `https://rest.isric.org/soilgrids/v2.0/properties/query?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}`;
  let sgData = null;
  const maxAttempts = 3;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const r = await fetchWithTimeout(url, { headers: { Accept: "application/json" } }, 7000);
      if (!r.ok) {
        const status = r.status;
        if (status >= 500 && attempt < maxAttempts) {
          await new Promise((r) => setTimeout(r, 300 * Math.pow(2, attempt - 1)));
          continue;
        }
        // Non-retriable or last attempt
        throw new Error(`SoilGrids request failed with status ${status}`);
      }
      const json = await r.json();
      sgData = json;
      break;
    } catch (err) {
      if (attempt < maxAttempts) continue;
      // else we keep sgData null and fall back
    }
  }

  let result = { pH: null, sand: null, clay: null, silt: null, organic_carbon: null };
  if (sgData) {
    const layers = sgData?.properties?.layers || {};
    result.pH = extractValue(layers, ["phh2o", "ph"]);
    result.sand = extractValue(layers, ["sand"]);
    result.clay = extractValue(layers, ["clay"]);
    result.silt = extractValue(layers, ["silt"]);
    result.organic_carbon = extractValue(layers, ["soc", "ocd", "oc"]);
  }

  // If N/P/K or weather fields are required, attempt fallback to local soil service
  let localSoil = null;
  try {
    const localUrl = `http://127.0.0.1:5001/soil?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}`;
    const r2 = await fetchWithTimeout(localUrl, {}, 5000);
    if (r2.ok) {
      const json2 = await r2.json();
      localSoil = json2?.soil || null;
    }
  } catch (err) {
    // ignore: local service optional
  }

  const merged = {
    pH: result.pH ?? localSoil?.pH ?? null,
    organic_carbon: result.organic_carbon ?? localSoil?.organic_carbon ?? null,
    sand: result.sand ?? localSoil?.sand ?? null,
    clay: result.clay ?? localSoil?.clay ?? null,
    silt: result.silt ?? localSoil?.silt ?? null,
    N: localSoil?.N ?? null,
    P: localSoil?.P ?? null,
    K: localSoil?.K ?? null,
    temperature: localSoil?.temperature ?? null,
    humidity: localSoil?.humidity ?? null,
    rainfall: localSoil?.rainfall ?? null,
  };

  const source = sgData ? (localSoil ? "soilgrids+local" : "soilgrids") : (localSoil ? "local" : "none");

  cache.set(key, { ts: Date.now(), source, data: merged });

  if (source === "none") {
    return res.status(503).json({ error: "No soil data available from SoilGrids or local service" });
  }

  return res.json({ source, data: merged });
});

export default router;
