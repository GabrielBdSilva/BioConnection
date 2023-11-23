import "./Formulario.css"
import { useForm } from 'react-hook-form';
import {  useNavigate } from 'react-router-dom';



const Formulario = () => {
    const navigate = useNavigate(); 
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    const onSubmit = (data) => {
  
      const userData = {
        // #################################colocar os dados corretos do formulario aqui e no input#######################################################
        tempSintomas: data.tempSintomas,
        doenca_C_A: data.doenca_C_A,
        febre: data.febre,
        vmt_drra: data.vmt_drra,
        cont_inter: data.cont_inter,
        alergias: data.alergias,
        sangramento: data.sangramento,
        sint_l_m_g: data.sint_l_m_g,
        med_tomando: data.med_tomando,
        dor_peito: data.dor_peito
      };
  
      //pega os dados q já tem 
      const existingData = JSON.parse(localStorage.getItem('users')) || [];
  
      // Add outros cadastros
      const updatedData = [...existingData, userData];
  
      
      localStorage.setItem('users', JSON.stringify(updatedData));
      alert("Dados Cadastrados com Sucesso")
      navigate('/');
  
    }

    return(
        <>
        <h1 className="pagina">FORMULÁRIO </h1>

        <div id='cadastro'>
        
    <div id="formulario">
      <h2>INSIRA OS DADOS:</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div id="formCad">
        <div>
        <p>Há quanto tempo você <br /> apresenta esses sintomas?</p>
        <input type="text" required= "preencha"  placeholder="Tempo dos Sintomas"{...register("tempSintomas", { required: "preencha" })} autoFocus />
        
        <p>Você tem alguma doença <br />
            crônica ou alergia?</p>
        <input type="text" required= "preencha"  placeholder="doenças cronicas ou alergias?"{...register("doenca_C_A", { required: "preencha" })} autoFocus />
       
       <p><br />Você está com febre?</p>
        <input type="text" required= "preencha"  placeholder="Está com febre?"{...register("febre", { required: "preencha" })} autoFocus />
        
        <p>Você está com <br />
            vômitos ou diarreia?</p>
        <input type="text" required= "preencha"  placeholder="está vomitando ou com diarreia?"{...register("vmt_drra", { required: "preencha" })} autoFocus />
        </div>

{/* ARRUMAR DADOS */}
        <div>
        <p>Os sintomas são <br />
        contínuos ou intermitentes?
        </p>
        <input type="text" required= "preencha"  placeholder="Sintomas Continuos ou intermitentes?"{...register("cont_inter", { required: "preencha" })} autoFocus />
       
        <p>tem alergia a algum<br />
        medicamento?</p>
        <input type="text" required= "preencha"  placeholder="Preencha com os medicamentos que voce tem alergia"{...register("alergias", { required: "preencha" })}/>
       
        <p>Você está com dificuldade <br />
        para respirar?</p>
        <input type="text" required= "preencha"  placeholder="Está com dificuldade respiratoria?"{...register("dfcd_respi", { required: "preencha" })}  />
        
        <p><br />Você está com sangramento?</p>
        <input type="text" required= "preencha"  placeholder="Está com sangramento (se sim onde?)"{...register("sangramento", { required: "preencha" })}  />
        </div>
        
{/* _________________________ */}
<div>
        <p>Os sintomas são leves, <br /> moderados ou graves?</p>
        <input type="text" required= "preencha"  placeholder="Sintomas Leves, Moderados, ou Graves"{...register("sint_l_m_g", { required: "preencha" })} autoFocus />
        
        <p>Você está tomando <br />
        algum medicamento?</p>
        <input type="text" required= "preencha"  placeholder="preencha os medicamentos que está tomando"{...register("med_tomando", { required: "preencha" })}/>
       
        <p><br />Você está com dor no peito?</p>
        <input type="text" required= "preencha"  placeholder="Está com dor no peito?"{...register("dor_peito", { required: "preencha" })}  />
       
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



