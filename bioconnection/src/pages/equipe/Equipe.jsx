import './Equipe.css'
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";



export default function Equipe( {grupo} ){
    
        let altGithub = "Github";
        let altLinkedin = "Linkedin";

    return(
        <>
        <h1 className="pagina">EQUIPE</h1>

        <div className="time">


            {grupo && grupo.map((memb,index) => (
                

            <div  className="equipe" key={index}>
            <img src={`/src/assets/${memb.foto}.png`} alt={memb.nome}/>
            <div>
            <h1>{memb.nome}</h1>
            <h1>Rm: {memb.rm}</h1>
            <div id="imgRedes">
            <img src={github} alt={altGithub}/>
            <img src={linkedin} alt={altLinkedin}/>
            </div>
            </div>
            
            </div>

            ))}

        </div>
        </>
    )
}