import axios, { AxiosRequestConfig } from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const isLogEnabled = process.env.NODE_ENV !== 'production' && process.env.NEXT_PUBLIC_LOGGING;

export const httpClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    // 'x-api-key': process.env.API_KEY,
    'Content-Type': 'application/json',
  },
  maxContentLength: 5 * 1000 * 1000, // bytes => 5 MB
});

// Add a request interceptor
httpClient.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    if (isLogEnabled)
      console.log('Network Request:', `${config.baseURL}${config.url}`, config.method);
    return config;
  },
  async (error) => {
    if (isLogEnabled) console.error('Network Request:', error);
    throw error;
  },
);

// Add a response interceptor
httpClient.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async (error) => {
    // Any status codes that falls outside the rangex of 2xx cause this function to trigger
    // Do something with response error
    if (isLogEnabled) console.error('Network Response:', error);
    throw error; // && error.response && error.response.data;
  },
);
