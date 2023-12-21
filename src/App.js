import './css/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';
import { Navegacion } from './layouts/navegacion';
import { SignIn } from './pages/Login.js';
import { Footer } from './layouts/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SucursalesCreadas } from './pages/Sucursales/SucursalesCreadas.js';
import { getAutenticacionToken } from './connections/helpers/token.js';
import { TercerosCreados } from './pages/Terceros/TercerosCreados.js';
import { ArticulosCreados } from './pages/Articulos/ArticulosCreados.js';
import { PucCreados } from './pages/PUC/MostrarPuc.js';
import { BancosCreados } from './pages/Bancos/BancosCreados.js';
import { Provider } from 'react-redux';
import { store } from './status/store.js';

getAutenticacionToken()

function App() {


  return (
    <div>
          <Provider store={store}>
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/Sucursales' element={<SucursalesCreadas/>}/>
          <Route path='/Clientes' element={<TercerosCreados/>}/>
          <Route path='/Articulos' element={<ArticulosCreados/>}/>
          <Route path='/puc' element={<PucCreados/>}/>
          <Route path='/Bancos' element={<BancosCreados/>}/>

        </Routes>
      </BrowserRouter>
      <Footer/>
      </Provider>
    </div>
  );
}

export default App;
