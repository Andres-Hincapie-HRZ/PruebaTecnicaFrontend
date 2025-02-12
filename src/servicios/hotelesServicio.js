import axios from 'axios';
import { authServicio } from './authServicio';
import { hotelesData } from '../data/mockData';

const API_URL = process.env.REACT_APP_API_URL;

export const hotelesServicio = {
  async obtenerHoteles(filtros = {}) {
    try {
      // Simulamos una llamada a API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      let hotelesActivos = hotelesData.filter(hotel => hotel.activo);
      
      if (filtros.ciudad) {
        hotelesActivos = hotelesActivos.filter(hotel => 
          hotel.ciudad.toLowerCase() === filtros.ciudad.toLowerCase()
        );
      }
      
      return hotelesActivos;
    } catch (error) {
      throw new Error('Error al obtener hoteles');
    }
  },

  async obtenerHotelPorId(id) {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      const hotel = hotelesData.find(h => h.id === parseInt(id));
      if (!hotel) throw new Error('Hotel no encontrado');
      return hotel;
    } catch (error) {
      throw new Error('Error al obtener el hotel');
    }
  },

  async crearHotel(datosHotel) {
    try {
      const response = await axios.post(`${API_URL}/hoteles`, 
        datosHotel,
        authServicio.obtenerHeadersAuth()
      );
      return response.data;
    } catch (error) {
      throw new Error('Error al crear el hotel');
    }
  },

  async actualizarHotel(id, datosHotel) {
    try {
      const response = await axios.put(`${API_URL}/hoteles/${id}`,
        datosHotel,
        authServicio.obtenerHeadersAuth()
      );
      return response.data;
    } catch (error) {
      throw new Error('Error al actualizar el hotel');
    }
  }
}; 