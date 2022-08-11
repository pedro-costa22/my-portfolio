import './Main.css';

import About from '../../../components/about/About';
import Formation from '../../../components/formation/Formation';
import Tech from '../../../components/tech/Tech';

import Theme from '../../../theme/Theme';
import { useContext } from 'react';

function Main(){

    const theme = useContext(Theme);
    

    return (
        <main className={`cont_main ${theme.darkMode === false ? 'cont_mainWhite' : ''}`}>
            <About />
            <Formation />
            <Tech />
            
        </main>
    )
}

export default Main;