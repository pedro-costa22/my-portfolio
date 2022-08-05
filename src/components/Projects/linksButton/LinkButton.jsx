import './LinkButton.css';

function LinkButton({icon, link}){
    return <a href={link} className="iconLink">{icon}</a>
}

export default LinkButton;