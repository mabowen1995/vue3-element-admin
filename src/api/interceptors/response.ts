import { AxiosResponse } from "axios";
import { removePendingXHR } from "./cancel";

export const responseHandler = (response: AxiosResponse): AxiosResponse | Promise<AxiosResponse> => {
  // 获取响应头中的token
  if (response.headers['Authorization']) {
    localStorage.setItem('token', response.headers['Authorization'])
  }
  removePendingXHR(response.config);
  return response.data;
}
