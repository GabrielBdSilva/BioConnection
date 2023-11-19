import './Menu.css'
import React from 'react';
import { Link } from "react-router-dom";
export default function Menu(){
    return (
        <header id='menu'>
          <nav>
            <ul >
             
              <li><Link to="/"> HOME</Link></li> 
              <li><Link to="/Sobre"> QUEM SOMOS</Link></li> 
               
              <li><Link to="/Equipe"> EQUIPE </Link></li> 
              <li><Link to="/Login"> AREA DO PACIENTE </Link></li> 

            </ul>
          </nav>
          
        </header>
        
      );
}
