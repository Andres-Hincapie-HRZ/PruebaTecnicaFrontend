import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexto/AuthContexto';
import { HotelesProvider } from './contexto/HotelesContexto';
import Navegacion from './componentes/comun/Navegacion';
import PiePagina from './componentes/comun/PiePagina';
import RutasApp from './rutas/RutasApp';
import './estilos/index.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <HotelesProvider>
          <div className="app">
            <Navegacion />
            <main className="contenido-principal">
              <RutasApp />
            </main>
            <PiePagina />
          </div>
        </HotelesProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
