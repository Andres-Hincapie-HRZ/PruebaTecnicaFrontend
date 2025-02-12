import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const authServicio = {
  async iniciarSesion(credenciales) {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, credenciales);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.mensaje || 'Error al iniciar sesión');
    }
  },

  async registrar(datosUsuario) {
    try {
      const response = await axios.post(`${API_URL}/auth/registro`, datosUsuario);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.mensaje || 'Error en el registro');
    }
  },

  async verificarToken(token) {
    try {
      const response = await axios.get(`${API_URL}/auth/verificar`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      throw new Error('Token inválido');
    }
  },

  obtenerHeadersAuth() {
    const token = localStorage.getItem('token');
    return {
      headers: { Authorization: `Bearer ${token}` }
    };
  }
}; 