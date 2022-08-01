import './Tech.css';

import TechButton from './techButtons/TechButton';

import {FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";

function Tech(){
    return (
        <div className='contTech'>
            <h3>Tecnologias</h3>
            <div className='buttonsTech'>
                <TechButton icon={<FaHtml5 className='iconTech'/>}/>
                <TechButton icon={<FaCss3Alt className='iconTech'/>}/>
                <TechButton icon={<FaSass className='iconTech'/>}/>
                <TechButton icon={<FaBootstrap className='iconTech'/>}/>
                <TechButton icon={<FaJsSquare className='iconTech'/>}/>
                <TechButton icon={<FaReact className='iconTech'/>}/>
                <TechButton icon={<FaNodeJs className='iconTech'/>}/>
                <TechButton icon={<FaNodeJs className='iconTech'/>}/>
                <TechButton icon={<FaNodeJs className='iconTech'/>}/>
                <TechButton icon={<FaNodeJs className='iconTech'/>}/>
                
            </div>
            
        </div>
    )

}

export default Tech;