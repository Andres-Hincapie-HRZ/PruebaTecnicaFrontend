import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../../estilos/PiePagina.css';

const PiePagina = () => {
  return (
    <footer className="pie-pagina">
      <div className="contenedor-pie">
        <div className="seccion-pie">
          <h3>Sobre Nosotros</h3>
          <ul>
            <li><Link to="/acerca-de">Quiénes Somos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to="/trabaja-con-nosotros">Trabaja con Nosotros</Link></li>
          </ul>
        </div>

        <div className="seccion-pie">
          <h3>Ayuda</h3>
          <ul>
            <li><Link to="/preguntas-frecuentes">Preguntas Frecuentes</Link></li>
            <li><Link to="/politicas">Políticas</Link></li>
            <li><Link to="/terminos">Términos y Condiciones</Link></li>
          </ul>
        </div>

        <div className="seccion-pie">
          <h3>Síguenos</h3>
          <div className="redes-sociales">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>

      <div className="derechos">
        <p>&copy; {new Date().getFullYear()} HotelApp. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default PiePagina; 