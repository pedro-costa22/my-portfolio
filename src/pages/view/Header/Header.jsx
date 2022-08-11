import Navbar from '../Navbar/Navbar';
import Intro from '../../../components/Introduction/Intro';

import Theme from '../../../theme/Theme';

import './Header.css';
import { useContext } from 'react';


function Header(){

    const theme = useContext(Theme);


    return (
<<<<<<< HEAD
        <header className="header">
            
=======
        <header className={`header ${theme.darkMode === false ? 'headerWhite' : ''}`}>
>>>>>>> darkMode
            <Navbar />
            <Intro />
        </header>
    )
}


export default Header;