import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faCalendarAlt, 
  faUsers 
} from '@fortawesome/free-solid-svg-icons';
import '../../estilos/BuscadorReservas.css';

const BuscadorReservas = ({ ciudades }) => {
  const navigate = useNavigate();
  const [filtros, setFiltros] = useState({
    fechaEntrada: '',
    fechaSalida: '',
    numeroHuespedes: 1,
    ciudad: ''
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFiltros(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const manejarBusqueda = (e) => {
    e.preventDefault();
    
    // Validaciones básicas
    if (!filtros.ciudad) {
      alert('Por favor selecciona una ciudad');
      return;
    }
    if (!filtros.fechaEntrada || !filtros.fechaSalida) {
      alert('Por favor selecciona las fechas de entrada y salida');
      return;
    }

    // Crear query params para la URL
    const params = new URLSearchParams({
      ciudad: filtros.ciudad,
      fechaEntrada: filtros.fechaEntrada,
      fechaSalida: filtros.fechaSalida,
      huespedes: filtros.numeroHuespedes
    });

    // Navegar a la página de resultados con los filtros
    navigate(`/hoteles?${params.toString()}`);
  };

  // Obtener la fecha mínima (hoy)
  const fechaMinima = new Date().toISOString().split('T')[0];

  return (
    <div className="buscador-container">
      <form onSubmit={manejarBusqueda} className="formulario-busqueda">
        <div className="grupo-busqueda">
          <div className="campo-busqueda">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icono-campo" />
            <select
              name="ciudad"
              value={filtros.ciudad}
              onChange={manejarCambio}
              className="input-busqueda"
              required
            >
              <option value="">¿A dónde vas?</option>
              {ciudades.map(ciudad => (
                <option key={ciudad.id} value={ciudad.nombre}>
                  {ciudad.nombre}, {ciudad.departamento}
                </option>
              ))}
            </select>
          </div>

          <div className="campo-busqueda">
            <FontAwesomeIcon icon={faCalendarAlt} className="icono-campo" />
            <input
              type="date"
              name="fechaEntrada"
              value={filtros.fechaEntrada}
              onChange={manejarCambio}
              min={fechaMinima}
              className="input-busqueda"
              required
            />
          </div>

          <div className="campo-busqueda">
            <FontAwesomeIcon icon={faCalendarAlt} className="icono-campo" />
            <input
              type="date"
              name="fechaSalida"
              value={filtros.fechaSalida}
              onChange={manejarCambio}
              min={filtros.fechaEntrada || fechaMinima}
              className="input-busqueda"
              required
            />
          </div>

          <div className="campo-busqueda">
            <FontAwesomeIcon icon={faUsers} className="icono-campo" />
            <select
              name="numeroHuespedes"
              value={filtros.numeroHuespedes}
              onChange={manejarCambio}
              className="input-busqueda"
              required
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Huésped' : 'Huéspedes'}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button type="submit" className="boton-buscar">
          Buscar Hoteles
        </button>
      </form>
    </div>
  );
};

export default BuscadorReservas;