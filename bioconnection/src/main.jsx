import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'
// import './Menu.css'
import './pages/equipe/Equipe.css'
// import './rodape.css'
import Home from './pages/home/Home.jsx';
// import Cadastro from './pages/Cadastro.jsx';
// import Login from './pages/Login.jsx';
// import Equipe from './pages/equipe/Equipe.jsx';

const routes = createBrowserRouter([
  { path: "/" , element: <App/>,errorElement: <Home/>,
   children: [
    
      {path: "/", element: <Home/>},
      // {path: "/Equipe", element: <Equipe grupo ={ this.state.equipe }/>},
      
      // {path: "/Cadastro", element: <Cadastro/>},
      // {path: "/Login", element: <Login/>},

      
      {path: "*", element: <Home/>}
   ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={routes} />
  </React.StrictMode>
  
)