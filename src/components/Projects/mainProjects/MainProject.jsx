import './MainProject.css';
import LinkButton from '../linksButton/LinkButton';
import {useContext, useState} from 'react';

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

            <div className={`descriptionProject ${reverse === true ? 'descriptionReverse' : ''}`}>
                <h5>{title}</h5>

                <span className='desc'>
                    <p>{description}</p>
                </span>
                
              <div className={`contTechProject ${reverse === true ? 'techReverse' : ''}`}>
                <FaCode className='codeIcon'/>
                 {tech.map(element => 
                    <span>{element}</span>    
                 )}
              </div>

              <div className='linksBtn'>

                    <LinkButton 
                        link={linkSite}
                        icon={<FaExternalLinkAlt className='linkIcon'/>}
                    />

                    <LinkButton 
                        link={linkRepo}
                        icon={<FaGithub className='linkIcon'/>}
                    />

                   
              </div>
                
            </div>

            
        </div>
    )
} ;

export default MainProject;