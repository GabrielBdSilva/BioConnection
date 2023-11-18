import './Menu.css'
import React from 'react';
import { Link } from "react-router-dom";
export default function Menu(){
    return (
        <header id='menu'>
          <nav>
            <ul >
             
              <li><Link to="/"> Home</Link></li> 
               
              <li><Link to="/Equipe"> Equipe </Link></li> 
              <li><Link to="/Login"> Area do Paciente </Link></li> 

            </ul>
          </nav>
          
        </header>
        
      );
}
