import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faFilter, 
  faCalendarAlt 
} from '@fortawesome/free-solid-svg-icons';
import { reservasData, hotelesData } from '../../data/mockData';
import '../../estilos/GestionReservas.css';

const GestionReservas = () => {
  const [reservas, setReservas] = useState([]);
  const [filtro, setFiltro] = useState('todas');
  const [busqueda, setBusqueda] = useState('');
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarReservas = () => {
      try {
        // Simulamos una carga asíncrona
        setTimeout(() => {
          let reservasFiltradas = reservasData.map(reserva => {
            const hotel = hotelesData.find(h => h.id === reserva.hotelId);
            return {
              ...reserva,
              nombreHotel: hotel ? hotel.nombre : 'Hotel no encontrado'
            };
          });

          // Aplicar filtros si existen
          if (filtro !== 'todas') {
            reservasFiltradas = reservasFiltradas.filter(
              reserva => reserva.estado.toLowerCase() === filtro.toLowerCase()
            );
          }

          if (busqueda) {
            reservasFiltradas = reservasFiltradas.filter(
              reserva =>
                reserva.nombreHuesped.toLowerCase().includes(busqueda.toLowerCase()) ||
                reserva.nombreHotel.toLowerCase().includes(busqueda.toLowerCase())
            );
          }

          setReservas(reservasFiltradas);
          setCargando(false);
        }, 500);
      } catch (error) {
        console.error('Error al cargar reservas:', error);
        setCargando(false);
      }
    };

    cargarReservas();
  }, [filtro, busqueda]);

  if (cargando) {
    return (
      <div className="cargando-container">
        <p>Cargando reservas...</p>
      </div>
    );
  }

  return (
    <div className="gestion-reservas-container">
      <div className="header-gestion">
        <h2>Gestión de Reservas</h2>
        <div className="filtros">
          <div className="campo-busqueda">
            <FontAwesomeIcon icon={faSearch} className="icono-busqueda" />
            <input
              type="text"
              placeholder="Buscar por huésped o hotel..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>
          <div className="campo-filtro">
            <FontAwesomeIcon icon={faFilter} className="icono-filtro" />
            <select
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
            >
              <option value="todas">Todas las reservas</option>
              <option value="confirmada">Confirmadas</option>
              <option value="pendiente">Pendientes</option>
              <option value="cancelada">Canceladas</option>
            </select>
          </div>
        </div>
      </div>

      <div className="tabla-reservas">
        {reservas.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Hotel</th>
                <th>Huésped</th>
                <th>Fechas</th>
                <th>Habitación</th>
                <th>Estado</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {reservas.map(reserva => (
                <tr key={reserva.id}>
                  <td>{reserva.nombreHotel}</td>
                  <td>
                    <div className="info-huesped">
                      <p>{reserva.nombreHuesped}</p>
                      <small>{reserva.correoHuesped}</small>
                    </div>
                  </td>
                  <td>
                    <div className="fechas-reserva">
                      <p>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        {' '}Entrada: {new Date(reserva.fechaEntrada).toLocaleDateString()}
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        {' '}Salida: {new Date(reserva.fechaSalida).toLocaleDateString()}
                      </p>
                    </div>
                  </td>
                  <td>{reserva.tipoHabitacion}</td>
                  <td>
                    <span className={`estado-${reserva.estado.toLowerCase()}`}>
                      {reserva.estado}
                    </span>
                  </td>
                  <td>${reserva.total.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="no-reservas">
            <p>No se encontraron reservas</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GestionReservas; 