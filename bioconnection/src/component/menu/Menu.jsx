
import React from 'react';
import { Link } from "react-router-dom";
export default function Menu(props){
    return (
        <header>
          <nav>
            <ul>
             
              <li><Link to="/"> Home</Link></li> 
               
              <li><Link to="/Equipe"> Equipe </Link></li> 
              {/* <li><Link to="/Login"> Login </Link></li>  */}

            </ul>
          </nav>
          {props.children}
        </header>
        
      );
}
