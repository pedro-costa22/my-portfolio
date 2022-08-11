import './LinkButton.css';

import Theme from '../../../theme/Theme';
import { useContext } from 'react';

function LinkButton({icon, link}){

    const theme = useContext(Theme);

    return <a href={link} className={`iconLink ${theme.darkMode === false ? 'iconLinkWhite' : ''}`} target="_blank">{icon}</a>
}

export default LinkButton;