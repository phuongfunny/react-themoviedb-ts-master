import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { API_URL } from "../constant/movie/index";
//set up dafault config for http requests here
// Please heva a look at here /github axios
const getToken = () => {
  return localStorage.getItem("token_user") || "";
};
const token = getToken();
const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "content-type": "application/json",
    Authorization: "Bearer " + token,
  },
});
// Add a request interceptor
axiosClient.interceptors.request.use(function (config: AxiosRequestConfig) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(function (response: AxiosResponse) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});
export default axiosClient;