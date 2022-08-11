import './Intro.css';

import { useContext, useEffect, useRef, useState } from 'react';

import vector from '../../img/vector.png';
import handIcon from '../../img/handIcon.png';

import SocialButton from './socialButton/SocialButton';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import Theme from '../../theme/Theme';

function Introdution(){

    const linkedin = "https://www.linkedin.com/in/pedro-costa22";
    const github = "https://github.com/pedro-costa22";
    const name = "Pedro Henrique";

    const theme = useContext(Theme);

    const [state, setState] = useState({
        lettersName: [...name],
        nameArray: [],
        index: 0
    })

    useEffect(() => {
        if(state.index <= state.lettersName.length) {
           setTimeout(() => {
            setState(prevState => ({
                ...prevState,
                nameArray: [...state.nameArray, state.lettersName[state.index]],
                index: state.index + 1
            }))
           }, 75)
        }
        
    },[state]) 

    
    return(
        <section className='introdution'>
        <div className={`introText ${theme.darkMode === false ? 'introTextWhite' : ''}`}>
            <h3>Hello World, Eu sou ... <span><img src={handIcon} /></span></h3>
            <h2>
                {state.nameArray.map(letter => {
                    return letter
                })}
            </h2>
            <span className={`devBox ${theme.darkMode === false ? 'devBoxWhite' : ''}`}>Desenvolvedor Front-end </span>

            <div className='btnBox'>

                <SocialButton 
                    icon={<FaLinkedinIn className={`iconSocial ${theme.darkMode === false ? 'iconSocialWhite' : ''} `} />} 
                    btnClass="btnSocial" 
                    link={linkedin}
                />

                <SocialButton 
                    icon={<FaGithub className={`iconSocial ${theme.darkMode === false ? 'iconSocialWhite' : ''} `} />}
                    btnClass="btnSocial"
                    link={github}

                />

            </div>

            
        </div>

        <div className='introImg'>
            <img src={vector} alt="Vetor"/>
        </div>

           
    </section>
    )
}

export default Introdution;