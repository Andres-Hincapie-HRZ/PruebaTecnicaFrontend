import React from 'react';

const Cargando = ({ mensaje = 'Cargando...' }) => {
  return (
    <div className="contenedor-cargando">
      <div className="spinner"></div>
      <p className="mensaje-cargando">{mensaje}</p>
    </div>
  );
};

export default Cargando; 