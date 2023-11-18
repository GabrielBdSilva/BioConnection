import "./Cadastro.css"
import { useForm } from 'react-hook-form';
import {  useNavigate } from 'react-router-dom';

import Cadastro_img from "../../assets/cadastro.png";


const Cadastro = () => {
    const navigate = useNavigate(); 
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    const onSubmit = (data) => {
  
      const userData = {
        nome: data.nome,
        email: data.email,
        password: data.password
      };
  
      //pega os dados q já tem 
      const existingData = JSON.parse(localStorage.getItem('users')) || [];
  
      // Add outros cadastros
      const updatedData = [...existingData, userData];
  
      
      localStorage.setItem('users', JSON.stringify(updatedData));
      alert("voce se cadastrou com sucesso")
      navigate('/Login');
  
    }

    return(
        <>
        <h1 className="pagina">CADASTRO</h1>

        <div id='cadastro'>
        
    <img src={Cadastro_img} alt="imagem de cadastro"/>
    <div id="formulario">
      <h2>INSIRA SEUS DADOS:</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div id="formCad">
        <div>
        <p>NOME COMPLETO</p>
        <input type="name" required= "preencha"  placeholder="Nome"{...register("nome", { required: "preencha" })} autoFocus />
        <p>EMAIL</p>
        <input type="email" required= "preencha"  placeholder="Email"></input>
        <p>TELEFONE</p>
        <input type="telefone" required= "preencha"  placeholder="Telefone"></input>
        <p>CONVÊNIO</p>
        <input type="convenio" required= "preencha"  placeholder="Convenio"></input>
        </div>

{/* ARRUMAR DADOS */}
        <div>
        <p>DATA DE NASCIMENTO</p>
        <input type="date" required= "preencha"  placeholder="Data de nascimento"/>
        <p>CPF</p>
        <input type="cpf" required= "preencha"  placeholder="CPF"{...register("cpf", { required: "preencha" })}/>
        <p>SENHA</p>
        <input type="password" required= "preencha"  placeholder="Senha"></input>
        <p>CONFIRME A SENHA</p>
        <input type="password" required= "preencha"  placeholder="Senha"{...register("password", { required: "preencha" })}  />
        </div>
        </div>

        <button>ENVIAR DADOS</button>
      </form>
    </div>
    </div>
        </>
    )
}
export default Cadastro;



