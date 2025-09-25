import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'https://ecom-back-iuoe.onrender.com/api/products/';
const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
});

export default api;
