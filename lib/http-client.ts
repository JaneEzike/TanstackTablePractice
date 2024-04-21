import config from "@/config";
import axios from "axios";

// PUBLIC HTTP client
export const HTTP = axios.create({
  baseURL: config.baseUrl,
  timeout: config.httpTimeout,
});
