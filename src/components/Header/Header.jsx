import './Header.css';
import { useEffect, useRef } from 'react';

import Navbar from '../Navbar/Navbar';
import vector from '../../img/vector.png';
import handIcon from '../../img/handIcon.png';

import SocialButton from '../socialButton/SocialButton';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";


function Header(){

    const linkedin = "https://www.linkedin.com/in/pedro-costa22";
    const github = "https://github.com/pedro-costa22";

    const name = useRef();

    useEffect(() => {
        let lettersName = [...name.current.innerHTML];
        let handleName = name.current;

        handleName.innerHTML = '';
        
        lettersName.forEach((letra, i) => {
            setTimeout(() =>
            handleName.innerHTML += letra, 75 * i)
        }) 
    },[])

    return (
        <header className="header">
            <Navbar />

            <section className='introdution'>
                <div className='introText'>
                    <h3>Hello World, Eu sou ... <span><img src={handIcon} /></span></h3>
                    <h2 ref={name}>Pedro Henrique</h2>
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

        </header>
    )
}

export default Header;