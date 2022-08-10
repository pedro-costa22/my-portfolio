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

                <div className='contSlide'>
                    <input type="radio" name='slider' id='s1' />
                    <input type="radio" name='slider' id='s2' />
                    <input type="radio" name='slider' id='s3' checked/>
                    <input type="radio" name='slider' id='s4' />
                    <input type="radio" name='slider' id='s5' />

                    <label htmlFor='s1' id='slide1'>
                        <img src={slide[0]} />
                    </label>

                    <label htmlFor='s2' id='slide2'>
                        <img src={slide[1]} />
                    </label>

                    <label htmlFor='s3' id='slide3'>
                        <img src={slide[2]} />
                    </label>

                    <label htmlFor='s4' id='slide4'>
                        <img src={slide[3]} />
                    </label>

                    <label htmlFor='s5' id='slide5'>
                        <img src={slide[4]} />
                    </label>
                </div>

                
            </div>
        </div>
    )
};

export default Demo;