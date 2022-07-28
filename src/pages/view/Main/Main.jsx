import './Main.css';

import About from '../../../components/about/About';
import Formation from '../../../components/formation/Formation';
import Tech from '../../../components/tech/Tech';

function Main(){

    return (
        <main className='cont_main'>
            <About />
            <Formation />
            <Tech />
            
        </main>
    )
}

export default Main;