import React from 'react';
import BuscadorReservas from '../componentes/reservas/BuscadorReservas';
import ListaHoteles from '../componentes/hoteles/ListaHoteles';
import { hotelesData, ciudades } from '../data/mockData';
import '../estilos/PaginaInicio.css';

const PaginaInicio = () => {
  const handleImageError = (e) => {
    e.target.parentElement.style.backgroundColor = '#1a1a1a';
  };

  return (
    <div className="pagina-inicio">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Experiencias Exclusivas</h1>
          <p className="hero-subtitle">Descubre el lujo en cada destino</p>
          <BuscadorReservas ciudades={ciudades} />
        </div>
        <div className="scroll-indicator" />
      </div>

      <div className="destacados-section">
        <div className="section-header">
          <h2>Destinos Destacados</h2>
          <div className="separator"></div>
        </div>
        <div className="destinos-grid">
          {ciudades.map(ciudad => (
            <div 
              key={ciudad.id} 
              className="destino-card" 
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${ciudad.imagen})`
              }}
              onError={handleImageError}
            >
              <h3>{ciudad.nombre}</h3>
              <p>{ciudad.departamento}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="contenedor-lista">
        <div className="section-header">
          <h2>Hoteles Exclusivos</h2>
          <div className="separator"></div>
        </div>
        <ListaHoteles hoteles={hotelesData} />
      </div>
    </div>
  );
};

export default PaginaInicio; 