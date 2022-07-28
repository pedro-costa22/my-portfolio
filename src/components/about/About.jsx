import './About.css';

import AboutButton from '../aboutButton/AboutButton';
import Text from '../textAbout/Text';
import DownloadButton from '../downloadButton/DownloadButton';

import Photo from '../../img/photograph.png';
import { useState } from 'react';

import { FaCloudDownloadAlt } from "react-icons/fa";



function About(){

    const [state, setState] = useState({
        about: 'active',
        exp: '',
        selected: ''
    });


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

    return (
        <div className='cont_about'>

            <div className='myFoto'>
                <img src={Photo} />
                <span className='borderPhoto'></span>
                
            </div>

            <div className="aboutItems">

                <div className={`aboutButtons ${state.selected}`}>
                    <AboutButton text="Sobre mim"  state={state.about} setState={handleAboutButton} action="about"/>
                    <AboutButton text="Experiência" state={state.exp} setState={handleAboutButton} action="exp"/>
                </div>

                <div className='aboutText'>
                    {state.about == 'active' ? 
                        <Text text="ABOUT ipsum dolor sit amet consectetur, adipisicing elit. Maxime alias, modi, necessitatibus commodi autem ipsa fugit aut voluptas nemo odio quis voluptates libero, eveniet tenetur quas animi? Quo, eligendi pariatur!
                        ABOUT ipsum dolor sit amet consectetur, adipisicing elit. Maxime alias, modi, necessitatibus commodi autem ipsa fugit aut voluptas nemo odio quis voluptates libero, eveniet tenetur quas animi? Quo, eligendi pariatur!
                        ABOUT ipsum dolor sit amet consectetur, adipisicing elit. Maxime alias, modi, necessitatibus commodi autem ipsa fugit aut voluptas nemo odio quis voluptates libero, eveniet tenetur quas animi? Quo, eligendi pariatur!
                        ABOUT ipsum dolor sit amet consectetur."/>
                        : 
                        <Text text="
                        EXPERIENCIA ipsum dolor sit amet consectetur, adipisicing elit. Maxime alias, modi, necessitatibus commodi autem ipsa fugit aut voluptas nemo odio quis voluptates libero, eveniet tenetur quas animi? Quo, eligendi pariatur!
                        EXPERIENCIA ipsum dolor sit amet consectetur, adipisicing elit. Maxime alias, modi, necessitatibus commodi autem ipsa fugit aut voluptas nemo odio quis voluptates libero, eveniet tenetur quas animi? Quo, eligendi pariatur!
                        EXPERIENCIA ipsum dolor sit amet consectetur, adipisicing elit. Maxime alias, modi, necessitatibus commodi autem ipsa fugit aut voluptas nemo odio quis voluptates libero, eveniet tenetur quas animi? Quo, eligendi pariatur!
                        EXPERIENCIA ipsum dolor sit amet consectet."/>
                    }

                </div>

                <div className='curriculoButton'>
                    <DownloadButton icon={<FaCloudDownloadAlt />} title="Curriculo"/>
                </div>
            
            </div>
        </div>
    )
};

export default About;