iimport axios from "axios";

const requestInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
  withCredentials: false,
});

/**
 * 请求拦截器
 */
requestInstance.interceptors.request.use(
  (config) => {
    console.log("请求拦截器", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * 响应拦截器
 */
requestInstance.interceptors.response.use(
  (response) => {
    console.log("响应拦截器", response);
    const responseData = response.data as IResponseType;
    return responseData;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default requestInstance;
