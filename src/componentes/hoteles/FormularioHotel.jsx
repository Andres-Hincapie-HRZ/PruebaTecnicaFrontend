import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons';

const FormularioHotel = ({ hotel, onGuardar, onCancelar }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    ciudad: '',
    descripcion: '',
    imagen: '',
    calificacion: 4.0,
    precioNoche: 0,
    activo: true,
    capacidadTotal: 0,
    ocupacionActual: 0,
    servicios: [],
    habitacionesDisponibles: {
      individual: 0,
      doble: 0,
      suite: 0,
      familiar: 0
    }
  });

  useEffect(() => {
    if (hotel) {
      setFormData(hotel);
    }
  }, [hotel]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGuardar(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-hotel">
      <h3>{hotel ? 'Editar Hotel' : 'Nuevo Hotel'}</h3>
      
      <div className="campo-formulario">
        <label>Nombre del Hotel</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>

      <div className="campo-formulario">
        <label>Dirección</label>
        <input
          type="text"
          name="direccion"
          value={formData.direccion}
          onChange={handleChange}
          required
        />
      </div>

      <div className="campo-formulario">
        <label>Ciudad</label>
        <input
          type="text"
          name="ciudad"
          value={formData.ciudad}
          onChange={handleChange}
          required
        />
      </div>

      <div className="campo-formulario">
        <label>Descripción</label>
        <textarea
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          required
        />
      </div>

      <div className="campo-formulario">
        <label>URL de la Imagen</label>
        <input
          type="url"
          name="imagen"
          value={formData.imagen}
          onChange={handleChange}
          required
        />
      </div>

      <div className="campo-formulario">
        <label>Precio por Noche</label>
        <input
          type="number"
          name="precioNoche"
          value={formData.precioNoche}
          onChange={handleChange}
          min="0"
          required
        />
      </div>

      <div className="campo-formulario">
        <label>Capacidad Total</label>
        <input
          type="number"
          name="capacidadTotal"
          value={formData.capacidadTotal}
          onChange={handleChange}
          min="0"
          required
        />
      </div>

      <div className="acciones-formulario">
        <button type="submit" className="boton-guardar">
          <FontAwesomeIcon icon={faSave} /> Guardar
        </button>
        <button type="button" className="boton-cancelar" onClick={onCancelar}>
          <FontAwesomeIcon icon={faTimes} /> Cancelar
        </button>
      </div>
    </form>
  );
};

export default FormularioHotel; 