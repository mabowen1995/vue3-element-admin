import { errorHandler, requestHandler, responseHandler } from ".";
import * as qs from "qs";
import axios from "axios";

export const http = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API_SAA + '/api/v1',
  withCredentials: true,
  timeout: 60000,
});


http.interceptors.request.use(requestHandler, errorHandler);
http.interceptors.response.use(responseHandler, errorHandler);

// 清空get请求query参数中的空值并格式化
export const queryStringify = (query?: any) => {
  let result = "";
  query && (result = qs.stringify(Object.fromEntries(Object.entries(query).filter(([k, v]) => v || v === 0))))
  return result;
}