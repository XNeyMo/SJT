import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://saijitan.onrender.com',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
