import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

const authInterceptor = (req) => {
  req.headers["ngrok-skip-browser-warning"] = "true";
  const accessToken = JSON.parse(localStorage.getItem("profile"))?.accessToken;
  if (accessToken) {
    req.headers.Authorization = `Bearer ${accessToken}`;
  }
  return req;
};

export const API = axios.create({
  baseURL: BASE_URL,
});

API.interceptors.request.use(authInterceptor);
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      return (window.location.href = "/login");
    }
    throw error;
  }
);
