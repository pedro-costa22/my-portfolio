import './Intro.css';

import { useEffect, useRef, useState } from 'react';

import vector from '../../img/vector.png';
import handIcon from '../../img/handIcon.png';

import SocialButton from './socialButton/SocialButton';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";



function Introdution(){

    const linkedin = "https://www.linkedin.com/in/pedro-costa22";
    const github = "https://github.com/pedro-costa22";
    const name = "Pedro Henrique";

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
        <div className='introText'>
            <h3>Hello World, Eu sou ... <span><img src={handIcon} /></span></h3>
            <h2>
                {state.nameArray.map(letter => {
                    return letter
                })}
            </h2>
            <span className='devBox'>Desenvolvedor Front-end </span>

            <div className='btnBox'>

                <SocialButton 
                    icon={<FaLinkedinIn className='iconSocial'/>} 
                    btnClass="btnSocial" 
                    link={linkedin}
                />

                <SocialButton 
                    icon={<FaGithub className='iconSocial'/>}
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