import './SecondaryProjetcs.css';

import { FaCode, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import LinkButton from '../linksButton/LinkButton';

import Theme from '../../../theme/Theme';
import { useContext } from 'react';


function SecondaryProject({img, desc, title, repo, site, tech}){

    const theme = useContext(Theme);

    
    return (
        <div className={`contProject ${theme.darkMode === false ? 'contProjectWhite' : ''}`}>

            <img src={img}  />
        
            <h5>{title}</h5>

            <p>{desc}</p>

            <div className={`techBtn ${theme.darkMode === false ? 'techBtnWhite' : ''}`}>
                <FaCode className={`linkIcon ${theme.darkMode === false ? 'linkWhite' : ''}`}/>
                {tech.map(item => <span>{item}</span>)}
            </div>

            <div className="btnLink">
                <LinkButton link={repo} icon={<FaGithub className={`linkIcon ${theme.darkMode === false ? 'iconWhite' : ''}`}/>} />
                <LinkButton link={site} icon={<FaExternalLinkAlt className={`linkIcon ${theme.darkMode === false ? 'iconWhite' : ''}`}/>} /> 
            </div>
            

            

        </div>
    )
}

export default SecondaryProject;