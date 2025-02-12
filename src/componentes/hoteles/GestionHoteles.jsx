import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, faEdit, faTrash, faBed, 
  faToggleOn, faToggleOff 
} from '@fortawesome/free-solid-svg-icons';
import FormularioHotel from './FormularioHotel';
import { hotelesData } from '../../data/mockData';
import '../../estilos/GestionHoteles.css';

const GestionHoteles = () => {
  const [hoteles, setHoteles] = useState([]);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [hotelSeleccionado, setHotelSeleccionado] = useState(null);
  const [filtro, setFiltro] = useState('todos');
  const [busqueda, setBusqueda] = useState('');
  const [hotelesFiltrados, setHotelesFiltrados] = useState([]);

  useEffect(() => {
    setHoteles(hotelesData);
  }, []);

  useEffect(() => {
    let resultado = [...hoteles];
    
    if (filtro !== 'todos') {
      resultado = resultado.filter(hotel => 
        filtro === 'activo' ? hotel.activo : !hotel.activo
      );
    }
    
    if (busqueda) {
      resultado = resultado.filter(hotel =>
        hotel.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        hotel.ciudad.toLowerCase().includes(busqueda.toLowerCase()) ||
        hotel.descripcion.toLowerCase().includes(busqueda.toLowerCase())
      );
    }
    
    setHotelesFiltrados(resultado);
  }, [hoteles, filtro, busqueda]);

  const agregarHotel = (nuevoHotel) => {
    setHoteles([...hoteles, { ...nuevoHotel, id: hoteles.length + 1 }]);
    setModalAbierto(false);
  };

  const editarHotel = (hotelEditado) => {
    setHoteles(hoteles.map(hotel => 
      hotel.id === hotelEditado.id ? hotelEditado : hotel
    ));
    setModalAbierto(false);
  };

  const toggleEstadoHotel = (hotelId) => {
    setHoteles(hoteles.map(hotel => 
      hotel.id === hotelId 
        ? {...hotel, activo: !hotel.activo}
        : hotel
    ));
  };

  const manejarBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  const manejarFiltro = (e) => {
    setFiltro(e.target.value);
  };

  return (
    <div className="gestion-hoteles-container">
      <div className="header-gestion">
        <h2>Gestión de Hoteles</h2>
        <button 
          className="boton-agregar"
          onClick={() => {
            setHotelSeleccionado(null);
            setModalAbierto(true);
          }}
        >
          <FontAwesomeIcon icon={faPlus} /> Nuevo Hotel
        </button>
      </div>

      <div className="filtros-container">
        <input 
          type="text" 
          placeholder="Buscar hotel..."
          className="busqueda-input"
          value={busqueda}
          onChange={manejarBusqueda}
        />
        <select 
          className="filtro-select"
          value={filtro}
          onChange={manejarFiltro}
        >
          <option value="todos">Todos los estados</option>
          <option value="activo">Activos</option>
          <option value="inactivo">Inactivos</option>
        </select>
      </div>

      {/* Modal para agregar/editar hotel */}
      {modalAbierto && (
        <div className="modal-overlay">
          <div className="modal-content">
            <FormularioHotel 
              hotel={hotelSeleccionado}
              onGuardar={hotelSeleccionado ? editarHotel : agregarHotel}
              onCancelar={() => setModalAbierto(false)}
            />
          </div>
        </div>
      )}

      {/* Lista de hoteles */}
      <div className="tabla-hoteles">
        <table>
          <thead>
            <tr>
              <th>Hotel</th>
              <th>Ubicación</th>
              <th>Capacidad</th>
              <th>Estado</th>
              <th>Habitaciones</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {hotelesFiltrados.map(hotel => (
              <tr key={hotel.id}>
                <td>
                  <div className="hotel-info">
                    <img src={hotel.imagen} alt={hotel.nombre} />
                    <div>
                      <h4>{hotel.nombre}</h4>
                      <p>{hotel.descripcion}</p>
                    </div>
                  </div>
                </td>
                <td>{hotel.ciudad}</td>
                <td>
                  {hotel.capacidadTotal} personas
                  <br />
                  <small>Ocupación: {hotel.ocupacionActual}</small>
                </td>
                <td>
                  <button 
                    className={`toggle-estado ${hotel.activo ? 'activo' : 'inactivo'}`}
                    onClick={() => toggleEstadoHotel(hotel.id)}
                  >
                    <FontAwesomeIcon icon={hotel.activo ? faToggleOn : faToggleOff} />
                    {hotel.activo ? 'Activo' : 'Inactivo'}
                  </button>
                </td>
                <td>
                  <button 
                    className="boton-habitaciones"
                    onClick={() => {/* Implementar gestión de habitaciones */}}
                  >
                    <FontAwesomeIcon icon={faBed} /> Gestionar
                  </button>
                </td>
                <td>
                  <div className="acciones">
                    <button 
                      className="boton-editar"
                      onClick={() => {
                        setHotelSeleccionado(hotel);
                        setModalAbierto(true);
                      }}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="boton-eliminar">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GestionHoteles; 