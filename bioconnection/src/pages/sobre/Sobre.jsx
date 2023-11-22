Sobre.jsx

import "./Sobre.css";
import sobre_img from "../../assets/sobre.png";
export default function Sobre() {
  return (
    <><div id="sobre">
      <div>
        <h3>O QUE É A</h3>
        <h2>BIOCONNECTION?</h2>
        <p>
          Fundada em 13 de novembro de 2023, a BioConnection é uma inovadora
          empresa hospitalar que não apenas salva, mas também conecta vidas.
          Reconhecendo a agitada rotina tanto dos médicos quanto dos pacientes
          nos hospitais, um grupo de estudantes do Centro Universitário de
          Informática e Administração Paulista desenvolveu esse projeto
          visionário, que evoluiu para uma startup com o propósito de aprimorar
          a experiência de ambos os lados. 
          <br></br>
          <br></br>
          A BioConnection busca trazer mais
          eficiência às unidades hospitalares por meio da implementação da
          inteligência artificial em tarefas cotidianas. Essa abordagem visa
          reduzir a lotação e o caos no ambiente hospitalar, proporcionando uma
          prestação de serviços mais ágil e eficaz. Ao incorporar a tecnologia
          de forma estratégica, a empresa torna a interação no ambiente
          hospitalar mais leve, fácil e rápida, alinhando-se com a evolução
          tecnológica que visa facilitar e melhorar nossas vidas.
        </p>
      </div>
      <div>
      <img src={sobre_img} alt="imagem do sobre"/>
      </div>
      </div>
    </>
  );
}
