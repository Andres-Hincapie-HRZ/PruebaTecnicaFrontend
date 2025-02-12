import React, { useState } from 'react';

const FormularioReserva = ({ habitacion, onConfirmar }) => {
  const [datosReserva, setDatosReserva] = useState({
    nombreHuesped: '',
    correoHuesped: '',
    telefonoHuesped: '',
    fechaEntrada: '',
    fechaSalida: '',
    numeroHuespedes: 1,
    comentarios: ''
  });

  const [errores, setErrores] = useState({});

  const validarFormulario = () => {
    const nuevosErrores = {};
    if (!datosReserva.nombreHuesped) nuevosErrores.nombreHuesped = 'El nombre es requerido';
    if (!datosReserva.correoHuesped) nuevosErrores.correoHuesped = 'El correo es requerido';
    if (!datosReserva.fechaEntrada) nuevosErrores.fechaEntrada = 'La fecha de entrada es requerida';
    if (!datosReserva.fechaSalida) nuevosErrores.fechaSalida = 'La fecha de salida es requerida';

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setDatosReserva(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      onConfirmar(datosReserva);
    }
  };

  return (
    <div className="formulario-reserva">
      <h3>Completar Reserva</h3>
      <form onSubmit={manejarEnvio}>
        <div className="campo">
          <label>Nombre Completo</label>
          <input
            type="text"
            name="nombreHuesped"
            value={datosReserva.nombreHuesped}
            onChange={manejarCambio}
          />
          {errores.nombreHuesped && <span className="error">{errores.nombreHuesped}</span>}
        </div>

        <div className="campo">
          <label>Correo Electrónico</label>
          <input
            type="email"
            name="correoHuesped"
            value={datosReserva.correoHuesped}
            onChange={manejarCambio}
          />
          {errores.correoHuesped && <span className="error">{errores.correoHuesped}</span>}
        </div>

        <div className="campo">
          <label>Teléfono</label>
          <input
            type="tel"
            name="telefonoHuesped"
            value={datosReserva.telefonoHuesped}
            onChange={manejarCambio}
          />
        </div>

        <div className="fechas-reserva">
          <div className="campo">
            <label>Fecha de Entrada</label>
            <input
              type="date"
              name="fechaEntrada"
              value={datosReserva.fechaEntrada}
              onChange={manejarCambio}
            />
            {errores.fechaEntrada && <span className="error">{errores.fechaEntrada}</span>}
          </div>

          <div className="campo">
            <label>Fecha de Salida</label>
            <input
              type="date"
              name="fechaSalida"
              value={datosReserva.fechaSalida}
              onChange={manejarCambio}
            />
            {errores.fechaSalida && <span className="error">{errores.fechaSalida}</span>}
          </div>
        </div>

        <div className="campo">
          <label>Comentarios Adicionales</label>
          <textarea
            name="comentarios"
            value={datosReserva.comentarios}
            onChange={manejarCambio}
          />
        </div>

        <button type="submit" className="boton-confirmar">
          Confirmar Reserva
        </button>
      </form>
    </div>
  );
};

export default FormularioReserva; 