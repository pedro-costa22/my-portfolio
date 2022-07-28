import './FormationButton.css';

function FormationButton({title, btnClass}){
    return (
        <button className={`btnFormation ${btnClass}`}>{title}</button>
    )
}

export default FormationButton;