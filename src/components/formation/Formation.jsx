import './Formation.css'

import {useState} from 'react';

import FormationButton from '../formationButton/FormationButton';

function Formation(){

    const [state, setState] = useState({
        graduation: 'activeFormation',
        course: ''
    });

    return (
        <div className='contFormation'>
            <div className='formationButtons'>
                <h3>Formação</h3>
                <FormationButton title="Graduação" btnClass={state.graduation}/>
                <FormationButton title="Técnico" btnClass={state.course}/>
            </div>

            <div className='formationText'>

            </div>
        </div>
    )
};

export default Formation;