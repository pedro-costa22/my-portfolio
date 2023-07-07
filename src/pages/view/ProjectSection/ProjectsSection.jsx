import './ProjectsSection.css';

import MainProject from '../../../components/Projects/mainProjects/MainProject';
import SecondaryProject from '../../../components/Projects/secondaryProject/SecondaryProjetcs';


import bfcrypto from '../../../img/bfcrypto.PNG';
import momento from '../../../img/momento.PNG';
import cloneNetflix from '../../../img/cloneNetflix.png';
import resolute from '../../../img/resolute.png';
import curriculoWeb from '../../../img/curriculoWeb.png';
import vagaBank from '../../../img/vagaBank.png';

import Theme from '../../../theme/Theme';
import { useContext } from 'react';


function ProjectsSection(){

    const theme = useContext(Theme);
   
    return(
        <section className='contProjects' id='project'>

            <div className={`mainProjects ${theme.darkMode === false ? 'mainProjectsWhite' : ''}`}>

                <h4>{"{  Princípais projetos  }"}</h4>
                <MainProject 
                    reverse={false}
                    title="Projeto - Momento"
                    description="O projeto momento simula uma empresa que oferece cursos de tecnologia e ressalta pontos importantes que um desenvolvedor deve ter, como suas soft skills. Foi realizado durante o curso no instituto PROA."
                    img={momento}
                    linkSite="https://momento-cursos.vercel.app/"
                    linkRepo="https://github.com/pedro-costa22/project-momento"
                    projectImages={[bfcrypto, momento, cloneNetflix, resolute, curriculoWeb]}
                    tech={['ReactJS', 'JavaScript', 'CSS']}
                
                />

                <MainProject 
                    reverse={true}
                    title="BF Crypto"
                    description="O Projeto simula uma empresa que vende nft's para investidores, foi realizado como projeto integrador da faculdade e teve como tema 'empreendedorismo'."
                    img={bfcrypto}
                    linkSite="https://bf-crypto.vercel.app/"
                    linkRepo="https://github.com/pedro-costa22/bf-crypto"
                    tech={['Html', 'CSS', 'JavaScript']}
                
                />

            </div>

            <div className='secondaryProjects'>
                <SecondaryProject 
                    img={cloneNetflix}
                    desc="Realizado para praticar o uso da biblioteca ReactJS e consumo de API (Utilizei a API do The movie Database)"
                    title="Clone Netflix"
                    tech={['ReactJS', 'JavaScript', 'CSS']}
                    repo="https://github.com/pedro-costa22/cloneNetflix-ReactJS"
                    site="https://clonenetflix-rho.vercel.app/"
                />

                <SecondaryProject 
                    img={vagaBank}
                    desc="Simula um caixa eletrônico virtual, visando tornar a tecnologia mais acessível para aqueles que possuem dificuldades com aplicativos."
                    title="VagaBank"
                    tech={['HTML', 'CSS', 'JavaScript']}
                    repo="https://github.com/pedro-costa22/VagaBank-project"
                    site="https://vagabank.vercel.app/"
                />

                <SecondaryProject 
                    img={curriculoWeb}
                    desc="O currículo web tem como objetivo tornar mais dinâmico e interativo o acesso as minhas informações pessoais."
                    title="Currículo Web"
                    tech={['HTML', 'CSS', 'JavaScript']}
                    repo="https://github.com/pedro-costa22/curriculo-web"
                    site="https://pedro-costa22.github.io/curriculo-web/"
                />

                <SecondaryProject 
                    img={resolute}
                    desc="Realizado para o TCC no instituto PROA que teve como desafio usar a tecnologia para melhorar o comércio local."
                    title="Resolute"
                    tech={['HTML', 'CSS', 'JavaScript', 'Python']}
                    repo="https://github.com/resolute-jobs/resolute"
                    site="https://resolute-jobs.vercel.app/index.html"
                    
                />

            </div>


            <div className={`mostProject ${theme.darkMode === false ? 'mostProjectWhite' : ''}`}>
                <a href='https://github.com/pedro-costa22' target="_blank">Ver todos projetos</a>
            </div>

          
        </section>
    )
};

export default ProjectsSection;