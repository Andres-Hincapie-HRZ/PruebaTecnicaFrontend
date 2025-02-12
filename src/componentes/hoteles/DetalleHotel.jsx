import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const DetalleHotel = ({ hotel }) => {
  if (!hotel) return <div>Hotel no encontrado</div>;

  return (
    <div className="detalle-hotel">
      <div className="hotel-header">
        <h2>{hotel.nombre}</h2>
        <p className="ubicacion">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          {hotel.ciudad}
        </p>
        <div className="calificacion">
          {[...Array(5)].map((_, index) => (
            <FontAwesomeIcon 
              key={index}
              icon={faStar}
              className={index < hotel.calificacion ? 'estrella-activa' : 'estrella'}
            />
          ))}
        </div>
      </div>

      <div className="habitaciones-disponibles">
        <h3>Habitaciones Disponibles</h3>
        <div className="lista-habitaciones">
          {hotel.habitaciones.map(habitacion => (
            <div key={habitacion.id} className="tarjeta-habitacion">
              <h4>{habitacion.tipo}</h4>
              <p>Capacidad: {habitacion.capacidad} personas</p>
              <p className="precio">${habitacion.precio}/noche</p>
              <button 
                className="boton-reservar"
              >
                Reservar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetalleHotel; 