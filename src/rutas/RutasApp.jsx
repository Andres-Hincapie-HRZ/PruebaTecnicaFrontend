import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexto/AuthContexto';
import InicioSesion from '../componentes/autenticacion/InicioSesion';
import Registro from '../componentes/autenticacion/Registro';
import ListaHoteles from '../componentes/hoteles/ListaHoteles';
import DetalleHotel from '../componentes/hoteles/DetalleHotel';
import ListaReservas from '../componentes/reservas/ListaReservas';
import GestionReservas from '../componentes/reservas/GestionReservas';
import PaginaInicio from '../paginas/PaginaInicio';
import GestionHoteles from '../componentes/hoteles/GestionHoteles';

const RutasPrivadas = ({ children }) => {
  const { usuario } = useAuth();
  return usuario ? children : <Navigate to="/inicio-sesion" />;
};

const RutasAgente = ({ children }) => {
  const { usuario } = useAuth();
  return usuario && usuario.rol === 'agente' ? children : <Navigate to="/" />;
};

const RutasApp = () => {
  return (
    <Routes>
      <Route path="/" element={<PaginaInicio />} />
      <Route path="/inicio-sesion" element={<InicioSesion />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/hoteles" element={<ListaHoteles />} />
      <Route path="/hoteles/:id" element={<DetalleHotel />} />
      
      {/* Rutas protegidas para agentes */}
      <Route path="/gestion-hoteles" element={
        <RutasAgente>
          <GestionHoteles />
        </RutasAgente>
      } />
      <Route path="/gestion-reservas" element={
        <RutasAgente>
          <GestionReservas />
        </RutasAgente>
      } />
      
      {/* Rutas protegidas para usuarios autenticados */}
      <Route path="/mis-reservas" element={
        <RutasPrivadas>
          <ListaReservas />
        </RutasPrivadas>
      } />
    </Routes>
  );
};

export default RutasApp; 