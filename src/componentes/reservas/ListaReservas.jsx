import React, { useState, useEffect } from 'react';
import { reservasData } from '../../data/mockData';

const ListaReservas = () => {
  const [reservas, setReservas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarReservas = async () => {
      try {
        // Simulamos una carga asíncrona
        setTimeout(() => {
          setReservas(reservasData);
          setCargando(false);
        }, 500);
      } catch (error) {
        console.error('Error al cargar reservas:', error);
        setCargando(false);
      }
    };

    cargarReservas();
  }, []);

  if (cargando) return <div>Cargando reservas...</div>;

  return (
    <div className="lista-reservas">
      <h2>Mis Reservas</h2>
      <div className="tabla-reservas">
        <table>
          <thead>
            <tr>
              <th>Hotel</th>
              <th>Habitación</th>
              <th>Fecha Entrada</th>
              <th>Fecha Salida</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map(reserva => (
              <tr key={reserva.id}>
                <td>{reserva.nombreHotel}</td>
                <td>{reserva.tipoHabitacion}</td>
                <td>{new Date(reserva.fechaEntrada).toLocaleDateString()}</td>
                <td>{new Date(reserva.fechaSalida).toLocaleDateString()}</td>
                <td>
                  <span className={`estado-${reserva.estado.toLowerCase()}`}>
                    {reserva.estado}
                  </span>
                </td>
                <td>
                  <button className="boton-ver">Ver Detalles</button>
                  {reserva.estado === 'PENDIENTE' && (
                    <button className="boton-cancelar">Cancelar</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListaReservas; 