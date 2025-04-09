import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://saijitan.onrender.com',
  // baseURL: 'http://localhost:9090',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
