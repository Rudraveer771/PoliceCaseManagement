import axios from 'axios';
import { apiConfig } from '../config/apiConfig';

const api = axios.create({
  baseURL: apiConfig.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const loginUser = (credentials) => api.post('/login', credentials);
export const fetchCases = (params) => api.get('/cases', { params });
export const fetchCaseDetails = (id) => api.get(`/cases/${id}`);
export const updateCase = (id, data) => api.put(`/cases/${id}`, data);
