import axios from "axios";
import { loadState } from "./storege";

const request = axios.create({ baseURL: import.meta.env.VITE_APP_URL });

request.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${loadState("user")?.token}`,
  };

  return config;
});

request.interceptors.response.use(
  (config) => config,
  (error) => {
    if (error.response.status == 401 || error.response.status == 403) {
      window.location.href = "/login";
    }
    return error;
  }
);

export { request };