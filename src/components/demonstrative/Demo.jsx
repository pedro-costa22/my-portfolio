import './Demo.css';

import Theme from '../../theme/Theme';
import { useContext } from 'react';

function Demo({slide}){


    const theme = useContext(Theme);
   

    return (
        <div className='contDemo'>

            <div className='demonstrative'>

                <div className='demoIntro'>
                    <h2>Demonstrativo do projeto</h2>
                    <button onClick={() => theme.setStateDemo(prevState => ({
                        ...prevState,
                        demo: false,
                        slide: []
                    }))}>X
                    </button>
                </div>

                <div id='slider'>
                <input type="radio" name="slider" id="s1" checked />
                <input type="radio" name="slider" id="s2" />
                <input type="radio" name="slider" id="s3" />
                <input type="radio" name="slider" id="s4" />
                <input type="radio" name="slider" id="s5" />

                <label for="s1" id="slide1">1</label>
                <label for="s2" id="slide2">2</label>
                <label for="s3" id="slide3">3</label>
                <label for="s4" id="slide4">4</label>
                <label for="s5" id="slide5">5</label>
                </div>

                
            </div>
        </div>
    )
};

export default Demo;