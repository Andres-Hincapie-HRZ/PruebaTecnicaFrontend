import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usuarios } from '../../data/mockData'; 
import { useAuth } from '../../contexto/AuthContexto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faEnvelope, faLock);

const InicioSesion = () => {
  const [credenciales, setCredenciales] = useState({
    correo: '',
    contrasena: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { iniciarSesion } = useAuth();

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setCredenciales(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    const usuarioValido = usuarios.find(
      usuario => usuario.correo === credenciales.correo && usuario.contrasena === credenciales.contrasena
    );
    if (usuarioValido) {
      iniciarSesion(usuarioValido);
      navigate('/gestion-hoteles');
    } else {
      setError('Credenciales inválidas');
    }
  };

  return (
    <div className="contenedor-autenticacion">
      <h2 className="titulo-auth"
      >Iniciar Sesión</h2>
      {error && <div className="error-mensaje">{error}</div>}
      
      <form onSubmit={manejarEnvio}>
        <div className="campo-formulario">
          <label htmlFor="correo">Correo Electrónico:</label>
          <div className="input-con-icono">
            <FontAwesomeIcon icon={faEnvelope} className="icono" />
            <input
              type="email"
              id="correo"
              name="correo"
              value={credenciales.correo}
              onChange={manejarCambio}
              required
            />
          </div>
        </div>

        <div className="campo-formulario">
          <label htmlFor="contrasena">Contraseña:</label>
          <div className="input-con-icono">
            <FontAwesomeIcon icon={faLock} className="icono" />
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              value={credenciales.contrasena}
              onChange={manejarCambio}
              required
            />
          </div>
        </div>

        <button type="submit" className="boton-principal">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default InicioSesion; 