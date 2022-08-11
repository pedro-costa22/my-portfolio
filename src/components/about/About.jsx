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
        <div className={`cont_about ${state.visibleAbout === true ? 'visible' : ''}`} ref={positionAbout}>

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
                        <Text text="ABOUT ipsum dolor sit amet consectetur, adipisicing elit. Maxime alias, modi, necessitatibus commodi autem ipsa fugit aut voluptas nemo odio quis voluptates libero, eveniet tenetur quas animi? Quo, eligendi pariatur!
                        ABOUT ipsum dolor sit amet consectetur, adipisicing elit. Maxime alias, modi, necessitatibus commodi autem ipsa fugit aut voluptas nemo odio quis voluptates libero, eveniet tenetur quas animi? Quo, eligendi pariatur!
                        "/>
                        : 
                        <Text text="
                        EXPERIENCIA ipsum dolor sit amet consectetur, adipisicing elit. Maxime alias, modi, necessitatibus commodi autem ipsa fugit aut voluptas nemo odio quis voluptates libero, eveniet tenetur quas animi? Quo, eligendi pariatur!
                        EXPERIENCIA ipsum dolor sit amet consectetur, adipisicing elit. Maxime alias, modi, necessitatibus commodi autem ipsa fugit aut voluptas nemo odio quis voluptates libero, eveniet tenetur quas animi? Quo, eligendi pariatur!
                        "/>
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