import Navbar from '../Navbar/Navbar';
import Intro from '../../../components/Introduction/Intro';

import Theme from '../../../theme/Theme';

import './Header.css';
import { useContext } from 'react';

function Header(){

    const theme = useContext(Theme);


    return (
        <header className={`header ${theme.darkMode === false ? 'headerWhite' : ''}`}>
            <Navbar />
            <Intro />
        </header>
    )
}


export default Header;