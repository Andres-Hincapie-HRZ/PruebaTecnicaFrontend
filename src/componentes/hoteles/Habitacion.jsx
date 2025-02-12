import React from 'react';

const Habitacion = ({ habitacion, onSeleccionar }) => {
  const {
    tipo,
    capacidad,
    precio,
    caracteristicas,
    disponible,
    imagen
  } = habitacion;

  return (
    <div className={`tarjeta-habitacion ${!disponible ? 'no-disponible' : ''}`}>
      <div className="imagen-habitacion">
        <img src={imagen} alt={tipo} />
      </div>
      
      <div className="contenido-habitacion">
        <h3>{tipo}</h3>
        <div className="detalles-habitacion">
          <p>Capacidad: {capacidad} personas</p>
          <ul className="caracteristicas">
            {caracteristicas.map((caracteristica, index) => (
              <li key={index}>{caracteristica}</li>
            ))}
          </ul>
        </div>

        <div className="precio-reserva">
          <span className="precio">${precio}/noche</span>
          <button 
            onClick={() => onSeleccionar(habitacion)}
            disabled={!disponible}
            className="boton-reservar"
          >
            {disponible ? 'Reservar' : 'No Disponible'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Habitacion; 