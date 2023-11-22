import './Login.css'
import { useRef } from 'react';
import Login_img from "../../assets/login.png";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const Login = () => {
  const { register, handleSubmit} = useForm();
  const navigate = useNavigate(); 

  const onSubmit = (data) => {
    const storedUserData = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = storedUserData.find(user => user.cpf === data.cpf && user.password === data.password);

    if (userExists) {
      navigate('/Formulario');
    } else {
      alert("Usuário ou senha inválidos!");
    }
  }

    return(
        <>
        <h1 className="pagina">LOGIN</h1>
        <div id='login'>


        <img src={Login_img} alt="imagem de login"  />
    <div id="formulario">
      <h2>INSIRA SEUS DADOS:</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>CPF</p>
        <input type="cpf" required= "preencha" placeholder="CPF"{...register("cpf", { required: "preencha" })}autoFocus />

        <p>SENHA</p>

        <input type="password" required= "preencha"  placeholder="Senha"{...register("password", { required: "preencha" })} />
       

      <p id="formLink" >
      <Link to="/EqcSenha">ESQUECI A SENHA</Link>
      <Link to="/Cadastro">REGISTRAR</Link>

      </p>
        <button>ENTRAR </button>
      </form>
      
    </div>
    </div>
        </>
    )
}
export default Login;

