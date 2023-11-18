import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

export default function Equipe( {grupo} ){
    
        let altGithub = "Github";
        let altLinkedin = "Linkedin";

    return(
        <>
        <h1 className="team">Equipe</h1>
        {/* <hr /> */}

        <div className="time">


            {grupo && grupo.map((memb,index) => (
                

            <div key={index} className="equipe">
            <img src={`/src/assets/${memb.foto}.png`} alt={memb.nome}/>

            <h1>{memb.nome}</h1>
            <h1>Rm: {memb.rm}</h1>
            <div id="imgRedes">
            <img src={github} alt={altGithub}/>
            <img src={linkedin} alt={altLinkedin}/>
            </div>
            
            </div>

            ))}

        </div>
        </>
    )
}