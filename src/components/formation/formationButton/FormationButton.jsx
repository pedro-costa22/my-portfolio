import './FormationButton.css';

function FormationButton({title, btnClass, setState, action}){

    return (
        <button onClick={() => setState(action)} className={`btnFormation ${btnClass}`}>{title}</button>
    )
}

export default FormationButton;