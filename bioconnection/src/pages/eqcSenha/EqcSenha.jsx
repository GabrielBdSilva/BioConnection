import "./EqcSenha.css"


import {  useNavigate } from 'react-router-dom';

const EqcSenha = () =>{
    const navigate = useNavigate(); 
    const onSubmit = () => {
    
        
        alert("confira se recebeu o link em seu email")
        navigate('/Login');
    
      }


    return(
        <>
        <h1 className="pagina">Digite o seu CPF <br />
        enviaremos um link de redefinição ao <br />
        email cadastrado em seu CPF</h1>

        <form id="EqcSenha" onSubmit={onSubmit}>
            <p>CPF</p>
            <input type="cpf" required= "preencha"  placeholder="CPF"/>
            <br />
            <button>Enviar</button>
        </form>
        </>
        )
}
export default EqcSenha;