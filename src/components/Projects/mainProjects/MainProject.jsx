import './MainProject.css';
import LinkButton from '../linksButton/LinkButton';

import {useContext} from 'react';

import { FaCode, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Theme from '../../../theme/Theme';




function MainProject({title, description, img, linkSite, linkRepo, tech, reverse, projectImages}){

    const theme = useContext(Theme);
    
    return (
        <div className={`contProjectMain ${reverse === true ? 'contProjectMainReverse' : ''}`}>
    
            <div className='projectImg'>
                <div className={`${reverse === true ? 'borderImgReverse' : 'borderImg' }`}>
                    <img src={img} 
                        onClick={() => theme.setStateDemo(prevState => ({
                            ...prevState,
                            demo: true,
                            slide: projectImages
                        })) }
                    />
                </div>
            </div>

            <div className={`descriptionProject ${theme.darkMode === false ? 'descriptionProjectWhite' : ''} ${reverse === true ? 'descriptionReverse' : ''}`}>
                <h5>{title}</h5>

                <span className={`desc ${theme.darkMode === false ? 'descWhite' : ''}`}>
                    <p>{description}</p>
                </span>
                
              <div className={`contTechProject  ${reverse === true ? 'techReverse' : ''}`}>
                <FaCode className={`codeIcon ${theme.darkMode === false ? 'codeIconWhite' : ''}`}/>
                 {tech.map(element => 
                    <span key={element} className={`${theme.darkMode === false ? 'techSpan' : ''}`}>{element}</span>    
                 )}
              </div>

              <div className='linksBtn'>

                    <LinkButton 
                        link={linkSite}
                        icon={<FaExternalLinkAlt className={`linkIcon ${theme.darkMode === false ? 'linkIconWhite' : ''}`}/>}
                    />

                    <LinkButton 
                        link={linkRepo}
                        icon={<FaGithub className={`linkIcon ${theme.darkMode === false ? 'linkIconWhite' : ''}`}/>}
                    />

                   
              </div>
                
            </div>

            
        </div>
    )
} ;

export default MainProject;