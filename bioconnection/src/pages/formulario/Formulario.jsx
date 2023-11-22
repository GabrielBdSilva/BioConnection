import "./Formulario.css"
import { useForm } from 'react-hook-form';
import {  useNavigate } from 'react-router-dom';



const Formulario = () => {
    const navigate = useNavigate(); 
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    const onSubmit = (data) => {
  
      const userData = {
        // #################################colocar os dados corretos do formulario aqui e no input#######################################################
        nome: data.nome,
        cpf: data.cpf,
        password: data.password,
        email: data.email,
        telefone: data.telefone,
        convenio: data.convenio
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
        <h1 className="pagina">FORMULÁRIO</h1>

        <div id='cadastro'>
        
    <div id="formulario">
      <h2>INSIRA OS DADOS:</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div id="formCad">
        <div>
        <p>Há quanto tempo você <br /> apresenta esses sintomas?</p>
        <input type="text" required= "preencha"  placeholder="Nome"{...register("nome", { required: "preencha" })} autoFocus />
        
        <p>Você tem alguma doença <br />
            crônica ou alergia?</p>
        <input type="text" required= "preencha"  placeholder="Email"{...register("email", { required: "preencha" })} autoFocus />
       
       <p><br />Você tem febre?</p>
        <input type="text" required= "preencha"  placeholder="Telefone"{...register("telefone", { required: "preencha" })} autoFocus />
        
        <p>Você está com <br />
            vômitos ou diarreia?</p>
        <input type="text" required= "preencha"  placeholder="Convenio"{...register("convenio", { required: "preencha" })} autoFocus />
        </div>

{/* ARRUMAR DADOS */}
        <div>
        <p>Os sintomas são <br />
        contínuos ou intermitentes?
        </p>
        <input type="text" required= "preencha"  placeholder="Data de nascimento"{...register("dtnasc", { required: "preencha" })} autoFocus />
       
        <p>tem alergia a algumbr <br />
        medicamento?</p>
        <input type="text" required= "preencha"  placeholder="CPF"{...register("cpf", { required: "preencha" })}/>
       
        <p>Você está com dificuldade <br />
        para respirar?</p>
        <input type="text" required= "preencha"  placeholder="Senha"{...register("password", { required: "preencha" })}  />
        
        <p><br />Você está com sangramento?</p>
        <input type="text" required= "preencha"  placeholder="Senha"{...register("password", { required: "preencha" })}  />
        </div>
        
{/* _________________________ */}
<div>
        <p>Os sintomas são leves, <br /> moderados ou graves?</p>
        <input type="text" required= "preencha"  placeholder="Data de nascimento"{...register("dtnasc", { required: "preencha" })} autoFocus />
        
        <p>Você está tomando <br />
        algum medicamento?</p>
        <input type="text" required= "preencha"  placeholder="CPF"{...register("cpf", { required: "preencha" })}/>
       
        <p><br />Você está com dor no peito?</p>
        <input type="text" required= "preencha"  placeholder="Senha"{...register("password", { required: "preencha" })}  />
       
        <br /> <br /> <br />
        <button id="text">ENVIAR DADOS</button>
        </div>
        </div>
       

      </form>
    </div>
    </div>
        </>
    )
}
export default Formulario;



