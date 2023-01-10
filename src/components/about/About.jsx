import './About.css';

import AboutButton from './aboutButton/AboutButton';
import Text from './textAbout/Text';
import DownloadButton from './downloadButton/DownloadButton';

import Photo from '../../img/photograph.png';
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
                        <Text text='Sempre fui apaixonado por tecnologia. Minha curiosidade a respeito da área no inicio me levou para o "hardware", onde aprendi a realizar manutenção de computadores e realizei alguns trabalhos autônomos com montagem e concerto de máquinas. 
                        Com o tempo fui conhecendo mais sobre as áreas relacionadas à tecnologia da informação e me deparei com a programação, onde de fato me identifiquei. Atualmente concentro meus estudos no desenvolvimento "front-end", ao qual pretendo me especializar, até estar pronto para novas práticas. 
                        Gosto de aprender coisas novas, o desafio é uma das minhas maiores motivações e o desenvolvimento de sistemas com certeza tem me proporcionado ótimos desafios. '/>
                        : 
                        <Text text="Como estagiário em front-end, fiquei responsável por auxiliar minha squad na manutenção do sistema POPULIS, 
                        (correção de bugs, melhorias e desenvolvimento de novas funcionalidades). 
                        Stacks: JavaScript, TypeScript, NodeJs, HTML, CSS, Sass, LitElement."
                        title="Estagiário de Desenvolvimento Front-end - (08/2022 - Atual)"
                        classTitle="titleExp"
                        />
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