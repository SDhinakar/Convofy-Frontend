import axios from "axios";

// Use custom environment mode
const ENV = import.meta.env.VITE_ENV_MODE;
const BACKEND = import.meta.env.VITE_BACKEND_URL;

const BASE_URL =
  ENV === "production"
    ? `${BACKEND}/api`
    : "http://localhost:5000/api"; // fallback in case BACKEND is not defined in dev

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
