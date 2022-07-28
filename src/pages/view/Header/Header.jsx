import Navbar from '../Navbar/Navbar';
import Intro from '../../../components/Introduction/Intro';

import './Header.css';

function Header(){


    return (
        <header className="header">
            <Navbar />
            <Intro />
        </header>
    )
}


export default Header;