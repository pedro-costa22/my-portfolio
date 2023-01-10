import './Tech.css';

import TechButton from './techButtons/TechButton';

import {FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { DiGithubBadge, DiPhp, DiMysql } from "react-icons/di";

import TsImg from '../../img/tsicon.png'; 
import TailwindImg from '../../img/tailwindcss.png';
import NextJs from '../../img/nextjs.png';

function Tech(){

    return (
        <div className='contTech'>
            <h3>Tecnologias</h3>
            <div className='buttonsTech'>
                <TechButton icon={<FaHtml5 className='iconTech'/>}/>
                <TechButton icon={<FaCss3Alt className='iconTech'/>}/>
                <TechButton icon={<FaSass className='iconTech'/>}/>
                <TechButton icon={<FaBootstrap className='iconTech'/>}/>
                <TechButton icon={<img src={TailwindImg} width="64" className='iconImg'/>}/>
                <TechButton icon={<FaJsSquare className='iconTech'/>}/>
                <TechButton icon={<img src={TsImg} width="64" className='iconImg'/>}/>
                <TechButton icon={<FaReact className='iconTech'/>}/>
                <TechButton icon={<img src={NextJs} width="64" className='iconImg'/>}/>
                <TechButton icon={<FaNodeJs className='iconTech'/>}/>
                <TechButton icon={<DiGithubBadge className='iconTech'/>}/>
            </div>
            
        </div>
    )

}

export default Tech;