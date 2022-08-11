import {useState, useEffect, useRef, useContext} from 'react';

import './Navbar.css';
import { FiHome, FiUser, FiEdit3, FiFolder, FiMail, FiAlignRight, FiX } from "react-icons/fi";

import Theme from '../../../theme/Theme';


function Navbar(){

    const logoText = '<PH/>';

    const [menuToggle, setMenuToggle] = useState(false);
    const [navFixed, setNavFixed] = useState('');
    const navbar = useRef();
    const button = useRef();

    const theme = useContext(Theme);

    window.addEventListener('scroll', () => {
        let scrollPosition = window.pageYOffset;
        
        if(scrollPosition >= 800) {
            setNavFixed(`fixed`);
        }else {
            setNavFixed('');
        }
    })

    useEffect(() => {
        let handleNavbar = navbar.current;
        handleNavbar.classList.toggle('active');

        const ul = handleNavbar.children[0].children;
        const btnTheme = handleNavbar.children[1]
        const list = [ul[0], ul[1], ul[2], ul[3], ul[4], btnTheme];

      

        list.forEach((li, i) => {
            menuToggle === true ? li.style.animation = `navLinkFade .4s ease forwards ${i / 40 + 0.3}s` : li.style.animation = '';
        })

        const menu = button.current;
        menu.classList.toggle('open')

        window.addEventListener("scroll", () => {
            handleNavbar.classList.remove('active');
            menu.classList.remove('open')
        })

    }, [menuToggle])

   

    return (
        <div className={`containerNav ${navFixed} ${navFixed === 'fixed' && theme.darkMode === false ? 'fixedWhite' : ''}`}>
            <div className='cont_nav'>
            <a href='index.html' className={`logo ${theme.darkMode === false ? 'logoBlue' : ''}`}>{logoText}</a>

            <nav className={`navbar ${navFixed != '' ? 'menuListOpen' : ''} ${theme.darkMode === false ? 'navbarWhite' : ''}`} ref={navbar}>
                <ul>
                    <li>
                        <a href=''><FiHome className='iconList'/> Home</a>
                    </li>
                    <li>
                        <a href=''><FiUser className='iconList'/> Sobre</a>
                    </li>
                    <li>
                        <a href=''><FiEdit3 className='iconList'/> Formação</a>
                    </li>
                    <li>
                        <a href=''><FiFolder className='iconList'/> Projetos</a>
                    </li>
                    <li>
                        <a href=''><FiMail className='iconList'/> Contato</a>
                    </li>
                </ul>

                    <button className={`btnTheme ${theme.darkMode === false ? 'off' : ''}`} 
                       onClick={() => theme.setDarkMode(!theme.darkMode)}>
                    </button>
            </nav>

            <button className={`btnMenuMobile ${theme.darkMode === false ? 'btnMenuMobileWhite' : ''}`} onClick={() => setMenuToggle(!menuToggle)} ref={button}>
                <span className='btnLine line1'></span>
                <span className='btnLine line2'></span>
                <span className='btnLine line3'></span>
            </button>

          
        </div>
        </div>
    )
};

export default Navbar;