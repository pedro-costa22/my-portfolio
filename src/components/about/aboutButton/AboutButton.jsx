import './AboutButton.css';

function AboutButton({text, state, setState, action, icon}){

    return(
        <button className={`btnAbout ${state}`} onClick={() => setState(action)}>{icon}{text}</button> 
                
    )
};

export default AboutButton;