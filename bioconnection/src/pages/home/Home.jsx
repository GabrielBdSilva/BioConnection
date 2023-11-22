import './Home.css'
import Home_img from "../../assets/home.png";
import localizacao from "../../assets/localizacao.png";
import telefone from "../../assets/telefone.png";
import gmail from "../../assets/gmail.png";


export default function Home() {
  

  return (
    <>
    <div id="home">
      <div>
        <h2 >BIOCONNECTION</h2>
        <h3>CONECTANDO SUA SAÚDE E <br />
        TRANSFORMANDO VIDAS <br />
        COM INOVAÇÃO BIOTECNOLÓGICA.</h3>
      </div>
      <div>
        <img src={Home_img} alt="icone de localização" />
        <div id='icones'>
          <div>
          <img src={telefone} alt="icone de telefone" />
          <p>Av. Lins de Vasconcelos, 1222</p>
          </div>
          
          <div>
        <img src={localizacao} alt="icone de localização" />
        <p>(11)2334-5566</p>
          </div>

          <div>
        <img src={gmail} alt="img da tela home" />
        <p>bio@gmail.com</p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
