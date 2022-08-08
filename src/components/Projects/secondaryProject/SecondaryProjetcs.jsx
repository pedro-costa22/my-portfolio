import './SecondaryProjetcs.css';

import { FaCode, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import LinkButton from '../linksButton/LinkButton';


function SecondaryProject({img, desc, title, repo, site, tech}){

    
    return (
        <div className='contProject'>

            <img src={img}  />
        
            <h5>{title}</h5>

            <p>{desc}</p>

            <div className='techBtn'>
                <FaCode className='linkIcon'/>
                {tech.map(item => <span>{item}</span>)}
            </div>

            <div className="btnLink">
                <LinkButton link={repo} icon={<FaGithub className='linkIcon'/>} />
                <LinkButton link={site} icon={<FaExternalLinkAlt className='linkIcon'/>} /> 
            </div>
            

            

        </div>
    )
}

export default SecondaryProject;