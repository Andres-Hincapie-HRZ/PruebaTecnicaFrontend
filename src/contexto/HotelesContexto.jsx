import React, { createContext, useState, useContext } from 'react';
import { hotelesServicio } from '../servicios/hotelesServicio';

const HotelesContexto = createContext();

export const HotelesProvider = ({ children }) => {
  const [hoteles, setHoteles] = useState([]);
  const [hotelSeleccionado, setHotelSeleccionado] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const obtenerHoteles = async (filtros = {}) => {
    try {
      setCargando(true);
      setError(null);
      const data = await hotelesServicio.obtenerHoteles(filtros);
      setHoteles(data);
    } catch (error) {
      setError('Error al cargar los hoteles');
    } finally {
      setCargando(false);
    }
  };

  const obtenerHotelPorId = async (id) => {
    try {
      setCargando(true);
      setError(null);
      const hotel = await hotelesServicio.obtenerHotelPorId(id);
      setHotelSeleccionado(hotel);
      return hotel;
    } catch (error) {
      setError('Error al cargar el hotel');
    } finally {
      setCargando(false);
    }
  };

  return (
    <HotelesContexto.Provider value={{
      hoteles,
      hotelSeleccionado,
      cargando,
      error,
      obtenerHoteles,
      obtenerHotelPorId
    }}>
      {children}
    </HotelesContexto.Provider>
  );
};

export const useHoteles = () => useContext(HotelesContexto); 