import { ElMessage } from "element-plus";

export const errorHandler = async (error: any) => {
  if (error.code === "ERR_CANCELED") {
    // 重复请求
    return Promise.reject();
  };

  // 判断是否登录
  if (error.response?.status === 401) {
    // 移除token，跳转登录页
    localStorage.removeItem('token');
  } else {
    const errorBody = {
      message: error.response?.data?.message,
      code: error.response?.status,
    };
    ElMessage.error(errorBody.message || errorBody.code || 'Unknown error');
    return Promise.reject(errorBody);
  }
}
