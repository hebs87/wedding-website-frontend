import axios from 'axios';

import { API_BASE_URL } from 'config/config';
import { PATH_HOME } from 'routes/paths';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = PATH_HOME;
      return;
    }

    return Promise.reject((error.response && error.response.data) || 'Something went wrong');
  },
);

export default axiosInstance;
