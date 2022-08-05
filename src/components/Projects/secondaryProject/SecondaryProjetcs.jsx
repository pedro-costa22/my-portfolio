import './SecondaryProjetcs.css';

import { FaCode, FaGithub } from "react-icons/fa";

import LinkButton from '../linksButton/LinkButton';

function SecondaryProject({img, desc, title, linkRepo, tech}){
    return (
        <div className='contProject'>
            <a href=''>
                <img src={img}  />
            </a>
            
            <h5>{title}</h5>

            <p>{desc}</p>

            <div className='techBtn'>
                <FaCode className='linkIcon'/>
                {tech.map(item => <span>{item}</span>)}
            </div>

            <div className="btnLink">
                <LinkButton icon={<FaGithub className='linkIcon'/>}/>
            </div>
            

            

        </div>
    )
}

export default SecondaryProject;