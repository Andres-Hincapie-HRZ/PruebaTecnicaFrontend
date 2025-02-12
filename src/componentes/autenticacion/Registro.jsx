import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaUserTie } from 'react-icons/fa';

const Registro = () => {
  const [datosUsuario, setDatosUsuario] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
    confirmarContrasena: '',
    tipoUsuario: 'viajero' // valores posibles: 'viajero' o 'agente'
  });

  const [error, setError] = useState('');

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setDatosUsuario(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validarFormulario = () => {
    if (datosUsuario.contrasena !== datosUsuario.confirmarContrasena) {
      setError('Las contraseñas no coinciden');
      return false;
    }
    return true;
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    if (!validarFormulario()) return;

    try {
      // Aquí iría la lógica de registro
      setError('');
    } catch (error) {
      setError('Error al registrar usuario');
    }
  };

  return (
    <div className="contenedor-autenticacion">
      <h2 className="titulo-auth">Registro de Usuario</h2>
      {error && <div className="error-mensaje">{error}</div>}
      
      <form onSubmit={manejarEnvio}>
        <div className="campo-formulario">
          <label htmlFor="nombre">Nombre:</label>
          <div className="input-con-icono">
            <FaUser className="icono" />
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={datosUsuario.nombre}
              onChange={manejarCambio}
              required
            />
          </div>
        </div>

        <div className="campo-formulario">
          <label htmlFor="apellido">Apellido:</label>
          <div className="input-con-icono">
            <FaUser className="icono" />
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={datosUsuario.apellido}
              onChange={manejarCambio}
              required
            />
          </div>
        </div>

        <div className="campo-formulario">
          <label htmlFor="correo">Correo Electrónico:</label>
          <div className="input-con-icono">
            <FaEnvelope className="icono" />
            <input
              type="email"
              id="correo"
              name="correo"
              value={datosUsuario.correo}
              onChange={manejarCambio}
              required
            />
          </div>
        </div>

        <div className="campo-formulario">
          <label htmlFor="contrasena">Contraseña:</label>
          <div className="input-con-icono">
            <FaLock className="icono" />
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              value={datosUsuario.contrasena}
              onChange={manejarCambio}
              required
            />
          </div>
        </div>

        <div className="campo-formulario">
          <label htmlFor="confirmarContrasena">Confirmar Contraseña:</label>
          <div className="input-con-icono">
            <FaLock className="icono" />
            <input
              type="password"
              id="confirmarContrasena"
              name="confirmarContrasena"
              value={datosUsuario.confirmarContrasena}
              onChange={manejarCambio}
              required
            />
          </div>
        </div>

        <div className="campo-formulario">
          <label htmlFor="tipoUsuario">Tipo de Usuario:</label>
          <div className="input-con-icono">
            <FaUserTie className="icono" />
            <select
              id="tipoUsuario"
              name="tipoUsuario"
              value={datosUsuario.tipoUsuario}
              onChange={manejarCambio}
            >
              <option value="viajero">Viajero</option>
              <option value="agente">Agente de Viajes</option>
            </select>
          </div>
        </div>

        <button type="submit" className="boton-principal">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Registro; 