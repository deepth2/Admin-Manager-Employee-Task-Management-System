import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api", // backend base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to headers if available
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
