import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.renmark.ir/',
});

export default api;
