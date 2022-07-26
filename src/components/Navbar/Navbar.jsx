import './Navbar.css';

function Navbar(){

    let logoText = '<PH/>';

    return (
        <div className='cont_nav'>
            <a href='index.html' className='logo'>{logoText}</a>

            <nav className='navbar'>
                <ul>
                    <li><a href=''>Home</a></li>
                    <li><a href=''>Sobre</a></li>
                    <li><a href=''>Formação</a></li>
                    <li><a href=''>Projetos</a></li>
                    <li><a href=''>Contato</a></li>
                </ul>

                <button className='btnTheme'></button>
            </nav>
        </div>
    )
};

export default Navbar;