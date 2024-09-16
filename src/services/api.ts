import axios from 'axios';

const api = axios.create({
  baseURL: `http://${process.env.IP}:3000`
});

export default api;
