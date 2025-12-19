import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1", // your backend base URL
  withCredentials: true, // VERY IMPORTANT — allows sending/receiving cookies
});

export default api;