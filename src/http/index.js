import axios from 'axios';

/** @type {import('axios').AxiosInstance} */
const http = axios.create({
  timeout: 20000,
  baseURL: import.meta.env.VITE_BASE_URL,
});

/**
 * 直接将response data抛出
 */
http.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export { http };
