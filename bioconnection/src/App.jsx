import React, { Component } from "react";

import axios from "axios"; //npm install axios
import { Route, Routes } from "react-router-dom";

import Login from "./pages/login/Login"
import Home from "./pages/home/Home";
import Menu from "./component/menu/Menu";
import Equipe from "./pages/equipe/Equipe";
import Cadastro from "./pages/cadastro/Cadastro";
import Erro from "./pages/erro/Erro";
import Rodape from "./component/rodape/Rodape";
import Sobre from "./pages/sobre/Sobre";
import EqcSenha from "./pages/eqcSenha/EqcSenha";
import Formulario from "./pages/formulario/Formulario";

// import { Outlet } from "react-router-dom";


class App extends Component{
  state = {
    equipe : [],
  }
  async componentDidMount(){
    try{
      const { data : equipe } = await axios.get("/src/api/equipe.json");//tralhamos com o metodo get pq queremos pegar dados 
      this.setState({ equipe });
    }catch(error){
      console.log(error);
    }
  }


render(){
  return(
    <>
      <Menu />

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Equipe" element={<Equipe grupo ={ this.state.equipe }/>}/> 
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Cadastro" element={<Cadastro/>}/>
          <Route path="/Sobre" element={<Sobre/>}/>
          <Route path="/eqcSenha" element={<EqcSenha/>}/>
          <Route path="/Formulario" element={<Formulario/>}/>


          <Route path="*" element={<Erro/>}/>

          
          </Routes>
          {/* <Outlet/> */}
        <Rodape />
    </>
  )
}
}
export default App;

