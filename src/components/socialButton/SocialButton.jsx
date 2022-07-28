import './SocialButton.css';


function SocialButton({link, icon, btnClass}){

    
    return <a href={link} className={btnClass} target="_blank">{icon}</a>
        
}

export default SocialButton;