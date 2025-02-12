import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexto/AuthContexto';
import Navegacion from './componentes/comun/Navegacion';
import RutasApp from './rutas/RutasApp';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <Navegacion />
          <div className="contenido-principal">
            <RutasApp />
          </div>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App; 