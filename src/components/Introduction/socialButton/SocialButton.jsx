import './SocialButton.css';

import Theme from '../../../theme/Theme';
import { useContext } from 'react';


function SocialButton({link, icon, btnClass}){

    const theme = useContext(Theme);

    
    return <a href={link} className={`${btnClass} ${theme.darkMode === false ? 'btnSocialWhite' : ''}`} target="_blank">{icon}</a>
        
}

export default SocialButton;