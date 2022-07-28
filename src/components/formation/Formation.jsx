import './Formation.css'

import {useState} from 'react';

import FormationButton from './formationButton/FormationButton';
import FormationText from './formationText/FormationText';

function Formation(){

    const [state, setState] = useState({
        graduation: 'activeFormation',
        course: ''
    });

    const handleFormationButton = (action) => {
        switch(action){
            case "graduation": 
                setState(old => ({
                    ...old, 
                    graduation: 'activeFormation',
                    course: ''
                }));
            break;

            case "course": 
                setState(old => ({
                    ...old, 
                    graduation: '',
                    course: 'activeFormation'
                }));
            break;
        }
    }

    return (
        <div className='contFormation'>
            <div className='formationButtons'>
                <h3>Formação</h3>
                <FormationButton title="Graduação" btnClass={state.graduation} setState={handleFormationButton} action="graduation"/>
                <FormationButton title="Técnico" btnClass={state.course} setState={handleFormationButton} action="course"/>
            </div>

            <div className='formationText'>
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