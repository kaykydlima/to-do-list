import axios from 'axios';

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL

const api = axios.create({
  baseURL: apiUrl,
})

export default api