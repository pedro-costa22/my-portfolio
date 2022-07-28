import './Intro.css';

import { useEffect, useRef } from 'react';

import vector from '../../img/vector.png';
import handIcon from '../../img/handIcon.png';

import SocialButton from './socialButton/SocialButton';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";



function Introdution(){

    const linkedin = "https://www.linkedin.com/in/pedro-costa22";
    const github = "https://github.com/pedro-costa22";

    let name = "Pedro Henrique";
    let teste = [...name];

    /*const name = useRef();

    useEffect(() => {

        //fazer com map no codigo
        let lettersName = [...name.current.innerHTML];
        let handleName = name.current;

        handleName.innerHTML = '';
        
        lettersName.forEach((letra, i) => {
            setTimeout(() =>
            handleName.innerHTML += letra, 75 * i)
        }) 
    },[]) */

  


    return(
        <section className='introdution'>
        <div className='introText'>
            <h3>Hello World, Eu sou ... <span><img src={handIcon} /></span></h3>
            <h2>{teste.map(letter => letter)}</h2>
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