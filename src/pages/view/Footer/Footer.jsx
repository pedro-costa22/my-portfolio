import './Footer.css';

import Theme from '../../../theme/Theme';
import { useContext } from 'react';

function Footer(){

    const theme = useContext(Theme);

    return (
        <footer className={`${theme.darkMode === false ? 'footerWhite' : ''}`}>
            <p>
                Developed by  
                <span>
                <a href='https://www.linkedin.com/in/pedro-costa22' target="_blank">{" </> Pedro H. Costa"} </a>
                </span>
            </p>

        </footer>
    )
}

export default Footer;