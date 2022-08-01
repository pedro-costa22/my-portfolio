import './Formation.css'

import {useState, useRef, useEffect} from 'react';

import FormationButton from './formationButton/FormationButton';
import FormationText from './formationText/FormationText';

function Formation(){

    const [state, setState] = useState({
        graduation: 'activeFormation',
        course: '',
        visibleForm: false     
    });

    const positionForm = useRef();
    const teste = useRef();
   

   
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
        <div className={`contFormation ${state.visibleForm === true ? 'visible' : ''}`} ref={positionForm}>
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
                        text="Lörem ipsum kang heteror in inte sukäling. Pekroledes sel spel till kror, sor pobelt. 
                        Euror söment podat. Svininfluensa tävla ut. Dipoktiga misk. Du kan vara drabbad. 
                        Vyv. 
                        Lörem ipsum kang heteror in inte sukäling. Pekroledes sel spel till kror, sor pobelt."
                    /> :
                    <FormationText 
                        title="Desenvolvimento web Java - Instituto PROA"  
                        text="Lörem ipsum kang heteror in inte sukäling. Pekroledes sel spel till kror, sor pobelt. 
                        Euror söment podat. Svininfluensa tävla ut. Dipoktiga misk. Du kan vara drabbad. 
                        Vyv. 
                        Lörem ipsum kang heteror in inte sukäling. Pekroledes sel spel till kror, sor pobelt."
                    />
                }
            </div>
        </div>
    )
};

export default Formation;