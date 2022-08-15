import axios from "axios";
import type { AxiosError, AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";

const httpInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

function interceptRequest(config: AxiosRequestConfig): AxiosRequestConfig {
  return config;
}

function interceptRequestError(error: AxiosError): Promise<AxiosError> {
  return Promise.reject(error);
}

function interceptResponse({ data }: AxiosResponse): AxiosResponse {
  return data;
}

function interceptResponseError(error: AxiosError): AxiosError {
  return error;
}

export function setupInterceptors(httpInstance: AxiosInstance): AxiosInstance {
  httpInstance.interceptors.request.use(interceptRequest, interceptRequestError);
  httpInstance.interceptors.response.use(interceptResponse, interceptResponseError);

  return httpInstance;
}

setupInterceptors(httpInstance);

export { httpInstance };
