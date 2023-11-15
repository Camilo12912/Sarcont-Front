import './css/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';
import { Navegacion } from './layouts/navegacion';
import { SignIn } from './pages/Login.js';
import { Footer } from './layouts/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RegistrarTercero } from './pages/RegistrarTercero.js';
import { RegistrarArticulo } from './pages/RegistrarArticulo.js';
import { SucursalesCreadas } from './pages/Sucursales/SucursalesCreadas.js';
import { getAutenticacionToken } from './connections/helpers/token.js';

function App() {

  const [recordatorio, setRecordatorio] = useState([]);
  const [alumnos, setAlumnos] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSignIn = () => {
    setLoggedIn(true);
  };

  const handleSignOut = () => {
    setLoggedIn(false);
  };
  getAutenticacionToken()

  return (
    <div>
      <BrowserRouter>
        <Navegacion loggedIn={loggedIn} onSignOut={handleSignOut} />
        <Routes>
          <Route path='/' element={<SignIn onSignIn={handleSignIn}/>} />
          <Route path='/Sucursales' element={<SucursalesCreadas/>}/>
          <Route path="/RegistrarTercero" element={<RegistrarTercero alumnos={alumnos} setAlumnos={setAlumnos} />} />
          <Route path="/RegistrarArticulo" element={<RegistrarArticulo alumnos={alumnos} setAlumnos={setAlumnos} />} />
 

        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
