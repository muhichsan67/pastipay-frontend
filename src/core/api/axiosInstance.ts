import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://pastipay-backend.vercel.app/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer PASTIPAY_TOKEN_2026',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ??
      error.message ??
      'Terjadi kesalahan saat menghubungi server';
    return Promise.reject(new Error(message));
  },
);
