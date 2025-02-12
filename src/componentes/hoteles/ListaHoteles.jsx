import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { hotelesServicio } from '../../servicios/hotelesServicio';
import Cargando from '../comun/Cargando';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faStar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../../estilos/ListaHoteles.css';

const ListaHoteles = () => {
  const [searchParams] = useSearchParams();
  const [hoteles, setHoteles] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const [modalAbierto, setModalAbierto] = useState(false);
  const [hotelSeleccionado, setHotelSeleccionado] = useState(null);

  useEffect(() => {
    const cargarHoteles = async () => {
      try {
        setCargando(true);
        // Obtener los filtros de la URL
        const filtros = {
          ciudad: searchParams.get('ciudad'),
          fechaEntrada: searchParams.get('fechaEntrada'),
          fechaSalida: searchParams.get('fechaSalida'),
          huespedes: searchParams.get('huespedes')
        };

        const data = await hotelesServicio.obtenerHoteles(filtros);
        setHoteles(data);
      } catch (error) {
        setError('Error al cargar los hoteles');
      } finally {
        setCargando(false);
      }
    };

    cargarHoteles();
  }, [searchParams]);

  const abrirModal = (hotel) => {
    setHotelSeleccionado(hotel);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setHotelSeleccionado(null);
    setModalAbierto(false);
  };

  if (cargando) return <Cargando mensaje="Cargando hoteles..." />;
  if (error) return <div className="error-mensaje">{error}</div>;
  if (hoteles.length === 0) return <div className="sin-resultados">No hay hoteles disponibles</div>;

  return (
    <div className="lista-hoteles-container">
      <div className="grid-hoteles">
        {hoteles.map(hotel => (
          <div key={hotel.id} className="tarjeta-hotel">
            <div className="imagen-hotel">
              <img src={hotel.imagen} alt={hotel.nombre} />
              <div className="etiqueta-precio">
                ${hotel.precioNoche.toLocaleString()} / noche
              </div>
            </div>
            <div className="contenido-hotel">
              <h3>{hotel.nombre}</h3>
              <p className="ubicacion">
                <i className="fas fa-map-marker-alt"></i> {hotel.ciudad}
              </p>
              <div className="calificacion">
                <span className="estrellas">
                  {'★'.repeat(Math.floor(hotel.calificacion))}
                  {'☆'.repeat(5 - Math.floor(hotel.calificacion))}
                </span>
                <span className="numero">{hotel.calificacion}</span>
              </div>
              <button 
                onClick={() => abrirModal(hotel)} 
                className="boton-ver-mas"
              >
                Ver Detalles
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalAbierto && hotelSeleccionado && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="boton-cerrar" onClick={cerrarModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            
            <div className="modal-hotel-detalle">
              <img 
                src={hotelSeleccionado.imagen} 
                alt={hotelSeleccionado.nombre} 
                className="modal-imagen"
              />
              
              <div className="modal-info">
                <h2>{hotelSeleccionado.nombre}</h2>
                <p className="ubicacion">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  {hotelSeleccionado.ciudad}
                </p>
                
                <div className="calificacion">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon 
                      key={index}
                      icon={faStar}
                      className={index < hotelSeleccionado.calificacion ? 'estrella-activa' : 'estrella'}
                    />
                  ))}
                </div>

                <div className="servicios">
                  <h3>Servicios Destacados</h3>
                  <ul>
                    {hotelSeleccionado.servicios?.map((servicio, index) => (
                      <li key={index}>{servicio}</li>
                    ))}
                  </ul>
                </div>

                <div className="precio-modal">
                  <span className="precio">
                    ${hotelSeleccionado.precioNoche.toLocaleString()} / noche
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListaHoteles; 