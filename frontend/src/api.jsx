import axios from 'axios';
const API = 'http://localhost:5000/api';

export const fetchUsers = () => axios.get(`${API}/users`);
export const claimPoints = (userId) => axios.post(`${API}/claim/${userId}`);
export const fetchClaimHistory = (userId) => axios.get(`${API}/claim/history/${userId}`);
export const addUser = (formData) =>
    axios.post(`${API}/users`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  
