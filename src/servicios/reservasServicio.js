import axios from 'axios';
import { authServicio } from './authServicio';

const API_URL = process.env.REACT_APP_API_URL;

export const reservasServicio = {
  async crearReserva(datosReserva) {
    try {
      const response = await axios.post(`${API_URL}/reservas`,
        datosReserva,
        authServicio.obtenerHeadersAuth()
      );
      return response.data;
    } catch (error) {
      throw new Error('Error al crear la reserva');
    }
  },

  async obtenerReservas(filtros = {}) {
    try {
      const response = await axios.get(`${API_URL}/reservas`, {
        params: filtros,
        ...authServicio.obtenerHeadersAuth()
      });
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener las reservas');
    }
  },

  async obtenerReservaPorId(id) {
    try {
      const response = await axios.get(`${API_URL}/reservas/${id}`,
        authServicio.obtenerHeadersAuth()
      );
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener la reserva');
    }
  },

  async cancelarReserva(id) {
    try {
      const response = await axios.post(`${API_URL}/reservas/${id}/cancelar`,
        {},
        authServicio.obtenerHeadersAuth()
      );
      return response.data;
    } catch (error) {
      throw new Error('Error al cancelar la reserva');
    }
  },

  async modificarReserva(id, datosActualizados) {
    try {
      const response = await axios.put(`${API_URL}/reservas/${id}`,
        datosActualizados,
        authServicio.obtenerHeadersAuth()
      );
      return response.data;
    } catch (error) {
      throw new Error('Error al modificar la reserva');
    }
  }
}; 