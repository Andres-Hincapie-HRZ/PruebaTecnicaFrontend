import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faInfoCircle, 
  faEnvelope, 
  faHotel, 
  faBookmark,
  faSignOutAlt 
} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../contexto/AuthContexto';
import '../../estilos/Navegacion.css';

const Navegacion = () => {
  const { usuario, cerrarSesion } = useAuth();
  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    cerrarSesion();
    navigate('/inicio-sesion');
  };

  const mostrarOpcionesUsuario = () => {
    if (!usuario) return null;

    // Si el usuario es agente, mostrar gestión de hoteles y reservas
    if (usuario.rol === 'agente') {
      return (
        <div className="botones-usuario">
          <Link to="/gestion-hoteles" className="boton-nav">
            <FontAwesomeIcon icon={faHotel} /> Gestión de Hoteles
          </Link>
          <Link to="/gestion-reservas" className="boton-nav">
            <FontAwesomeIcon icon={faBookmark} /> Gestión de Reservas
          </Link>
          <button onClick={handleCerrarSesion} className="boton-cerrar-sesion">
            <FontAwesomeIcon icon={faSignOutAlt} /> Cerrar Sesión
          </button>
        </div>
      );
    }

    return (
      <div className="botones-usuario">
        <Link to="/mis-reservas" className="boton-nav">
          <FontAwesomeIcon icon={faBookmark} /> Mis Reservas
        </Link>
        <button onClick={handleCerrarSesion} className="boton-cerrar-sesion">
          <FontAwesomeIcon icon={faSignOutAlt} /> Cerrar Sesión
        </button>
      </div>
    );
  };

  return (
    <nav className="navegacion-principal">
      <div className="menu-principal">
        <div className="logo">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} /> Inicio
          </Link>
        </div>
        <div className="enlaces">
          <Link to="/sobre">
            <FontAwesomeIcon icon={faInfoCircle} /> Sobre
          </Link>
          <Link to="/contacto">
            <FontAwesomeIcon icon={faEnvelope} /> Contacto
          </Link>
        </div>
      </div>

      <div className="menu-autenticacion">
        {usuario ? (
          mostrarOpcionesUsuario()
        ) : (
          <div className="botones-auth">
            <Link to="/inicio-sesion" className="boton-auth">
              Iniciar Sesión
            </Link>
            <Link to="/registro" className="boton-auth">
              Registrarse
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navegacion; 