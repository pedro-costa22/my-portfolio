import './FormationText.css';



function FormationText({title, text}){
    return(
        <div className='textFormation'>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>

    )
};

export default FormationText;