import { AxiosRequestConfig } from "axios";
import { addPendingXHR, removePendingXHR } from "./cancel";

export const requestHandler = async(config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
  const token = localStorage.getItem("token");
  if (token) config.headers!['token'] = token
  removePendingXHR(config);
  addPendingXHR(config);
  return config;
}
