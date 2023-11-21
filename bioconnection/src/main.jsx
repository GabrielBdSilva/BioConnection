import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'
// import './Menu.css'
// import './pages/equipe/Equipe.css'
// import './rodape.css'
import Home from './pages/home/Home.jsx';
import Erro from './pages/erro/Erro.jsx';
// import Cadastro from './pages/Cadastro.jsx';
// import Login from './pages/Login.jsx';
// import Equipe from './pages/equipe/Equipe.jsx';

const routes = createBrowserRouter([
  { path: "/" , element: <App/>,errorElement: <Erro/>,
   children: [
    
      {path: "/", element: <Home/>},
      
      
      {path: "*", element: <Erro/>}
   ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={routes} />
  </React.StrictMode>
  
)