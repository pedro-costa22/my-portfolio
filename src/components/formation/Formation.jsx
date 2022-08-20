import './Formation.css'

import {useState, useRef, useEffect, useContext} from 'react';

import FormationButton from './formationButton/FormationButton';
import FormationText from './formationText/FormationText';

import Theme from '../../theme/Theme';

function Formation(){

    const [state, setState] = useState({
        graduation: 'activeFormation',
        course: '',
        visibleForm: false     
    });

    const positionForm = useRef();
    const teste = useRef();
   

    const theme = useContext(Theme);
   
    const handleFormationButton = (action) => {
        switch(action){
            case "graduation": 
                setState(old => ({
                    ...old, 
                    graduation: 'activeFormation',
                    course: ''
                }));
                animateText();
            break;

            case "course": 
                setState(old => ({
                    ...old, 
                    graduation: '',
                    course: 'activeFormation'  
                }));
                animateText();
            break;
        }
    }

    const animateText = () => {
        teste.current.classList.remove('active');
        setTimeout(() => { 
            teste.current.classList.add('active')
        }, 50)
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const windowTop = window.pageYOffset + ((window.innerHeight * 4) / 4);
            let positionFormation = positionForm.current.getBoundingClientRect();
            
            if((windowTop) > positionFormation.width){
                setState(prevState => ({
                    ...prevState,
                    visibleForm: true
                })); 
            }
        });

        
       }, []);
    

    return (
        <div className={`contFormation ${state.visibleForm === true ? 'visible' : ''} ${theme.darkMode === false ? 'contFormationWhite' : ''}`} ref={positionForm} id="formation">
            <div className='formationButtons'>
                <h3>Formação</h3>
                <FormationButton title="Graduação" btnClass={state.graduation} setState={handleFormationButton} action="graduation"/>
                <FormationButton title="Técnico" btnClass={state.course} setState={handleFormationButton} action="course"/>
            </div>

            <div className='formationText active' ref={teste}>
                {
                    state.graduation != '' ? 
                    <FormationText 
                        title="Análise e Desenvolvimento de Sistemas - Uninove"  
                        text="No curso são oferecidas disciplinas visando a formação Full Stack com disciplinas que visam apresentar conceitos para o desenvolvimento Front-End e Back-End.
                        As principais atribuições do Tecnólogo em Análise e Desenvolvimento de Sistemas são: analisar, projetar, documentar, especificar, testar, implantar e manter sistemas de computação."
                    /> :
                    <FormationText 
                        title="Desenvolvimento web Java - Instituto PROA"  
                        text="O curso profissionalizante oferecido  pelo instituto PROA em parceria com o Senac, possui duração de 1 semestre e passa 
                              pela trilha de desenvolvimento fullstack, abordando as princípais tecnologias utilizadas no frontend (HTML, CSS, JavaScript e ReactJS) 
                              no backend utilizamos (Java e SpringBoot) e banco de dados MySQL.  "
                    />
                }
            </div>
        </div>
    )
};

export default Formation;