import {useState, useEffect, useRef} from 'react';

import './Navbar.css';
import { FiHome, FiUser, FiEdit3, FiFolder, FiMail, FiAlignRight, FiX } from "react-icons/fi";


function Navbar(){

    let logoText = '<PH/>';

    const [menuToggle, setMenuToggle] = useState(false);
    const navbar = useRef();

    useEffect(() => {
        let handleNavbar = navbar.current;
        handleNavbar.classList.toggle('active');
        
    }, [menuToggle])

    return (
        <div className='cont_nav'>
            <a href='index.html' className='logo'>{logoText}</a>

            <nav className='navbar' ref={navbar}>
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

                <button className='btnTheme'></button>
            </nav>

            <button className='btnMenuMobile' onClick={() => setMenuToggle(!menuToggle)}>
                {menuToggle === false ? <FiAlignRight className='iconMenu'/> : <FiX className='iconMenu'/>}
            </button>
        </div>
    )
};

export default Navbar;