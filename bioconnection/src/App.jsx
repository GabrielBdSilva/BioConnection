// import Rodape from "./components/Rodape";
import React, { Component } from "react";

import axios from "axios"; //npm install axios
import { Route, Routes } from "react-router-dom";

// import Login from "./pages/Login"
import Home from "./pages/home/Home";
// import Cadastro from "./pages/Cadastro";
import Menu from "./component/menu/Menu";
import Equipe from "./pages/equipe/Equipe";

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
          {/* <Route path="/Login" element={<Login/>}/> */}
          {/* <Route path="/Cadastro" element={<Cadastro/>}/> */}
          
          </Routes>
          {/* <Outlet/> */}
        {/* <Rodape /> */}
    </>
  )
}
}
export default App;
