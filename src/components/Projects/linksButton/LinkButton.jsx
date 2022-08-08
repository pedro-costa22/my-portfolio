import './LinkButton.css';

function LinkButton({icon, link}){
    return <a href={link} className="iconLink" target="_blank">{icon}</a>
}

export default LinkButton;