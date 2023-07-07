import './About.css';

import AboutButton from './aboutButton/AboutButton';
import Text from './textAbout/Text';
import DownloadButton from './downloadButton/DownloadButton';

import Photo from '../../img/profile.jpg';
import { useState, useRef, useEffect } from 'react';

import { FaCloudDownloadAlt } from "react-icons/fa";



function About(){

   
    const [state, setState] = useState({
        about: 'active',
        exp: '',
        selected: '',
        visibleAbout: false
    });

    const positionAbout = useRef();


    const handleAboutButton = (action) => {
       switch(action) {
            case 'about': 
                setState(old => ({
                    ...old, 
                    about: 'active',
                    exp: '',
                    selected: ''
                }));
            break; 

            case 'exp':
                setState(old => ({
                    ...old, 
                    about: '',
                    exp: 'active',
                    selected: 'selected'
                }));
            break;

       }

    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
            let positionAboutDiv = positionAbout.current.getBoundingClientRect();
            
            if((windowTop) > positionAboutDiv.width){
                setState(prevState => ({
                    ...prevState,
                    visibleAbout: true
                })); 
            }
        });
       }, []);
    

    return (
        <div className={`cont_about ${state.visibleAbout === true ? 'visible' : ''}`} ref={positionAbout} id="about">

            <div className='myFoto'>
                <div className='borderPhoto'>
                    <img src={Photo} />
                </div>
                
            </div>

            <div className="aboutItems aboutButtonsWhite">

                <div className={`aboutButtons ${state.selected}`}>
                    <AboutButton text="Sobre mim"  state={state.about} setState={handleAboutButton} action="about"/>
                    <AboutButton text="Experiência" state={state.exp} setState={handleAboutButton} action="exp"/>
                </div>

                <div className='aboutText'>
                    {state.about == 'active' ? 
                        <Text text='Sempre fui apaixonado por tecnologia, minha curiosidade em programação me tornou um entusiasta de javascript, onde tenho concentrado meus estudos a algum tempo.
                        Estou atuando como desenvolvedor frontend, utilizando as stacks: Javascript, Typescript, React, Next, Redux, Tailwind CSS, Sass, Styled-components.
                        
                        Dedico-me também aos estudos por conta própria do backend, utilizando Nodejs, Express, Sequelize, SQL e MongoDB, gosto muito do desenvolvimento web, e estou sempre buscando novas tecnologias para aprender, vejo isso como desafios estimulantes que me tornam cada vez mais um profissional competente para lidar com os desafios que encontramos diariamente.'/>
                        : 
                        <>
                            <Text text="Responsável por auxiliar minha squad na manutenção do sistema , 
                            (correção de bugs, melhorias, desenvolvimento de novas funcionalidades e code review). 
                            Stacks: JavaScript, TypeScript, NextJs, NodeJS, Styled-components, tailwind CSS, Sass. "
                            title="Estagiário de Desenvolvimento Front-end - (02/2023 - Atual) - QFlash"
                            classTitle="titleExp"
                            />
                            <Text text="Como estagiário em front-end, fiquei responsável por auxiliar minha squad na manutenção do sistema POPULIS, 
                            (correção de bugs, melhorias e desenvolvimento de novas funcionalidades). 
                            Stacks: JavaScript, TypeScript, HTML, CSS, Sass, LitElement."
                            title={`
                                Estagiário de Desenvolvimento Front-end - 
                                (08/2022 - 12/2022) - GLR Consultoria em Sistemas Ltda
                            `}
                            classTitle="titleExp"
                            />
                        </>
                    }

                </div>

                <div className='curriculoButton'>
                    <DownloadButton icon={<FaCloudDownloadAlt className='iconDownload'/>} title="Curriculo"/>
                </div>
            
            </div>
        </div>
    )
};




export default About;