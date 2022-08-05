import './ProjectsSection.css';

import MainProject from '../../../components/Projects/mainProjects/MainProject';
import SecondaryProject from '../../../components/Projects/secondaryProject/SecondaryProjetcs';

import projectOne from '../../../img/thumb.PNG';
import bfcrypto from '../../../img/bfcrypto.PNG';

function ProjectsSection(){
    return(
        <section className='contProjects'>

            <div className='mainProjects'>
                <h4>{"{  Princípais projetos  }"}</h4>
                <MainProject 
                    reverse={false}
                    title="DemoDay"
                    description="Descrição do projeto aqui"
                    img={projectOne}
                    tech={['Html', 'CSS', 'JavaScript']}
                
                />

                <MainProject 
                    reverse={true}
                    title="DemoDay"
                    description="Descrição do projeto aqui"
                    img={bfcrypto}
                    tech={['Html', 'CSS', 'JavaScript']}
                
                />


            </div>

            <div className='secondaryProjects'>
                <SecondaryProject 
                    img={projectOne}
                    desc="Descrição do projeto aqui"
                    title="Name project"
                    tech={['HTML', 'CSS', 'JavaScript']}
                />

                <SecondaryProject 
                    img={projectOne}
                    desc="Descrição do projeto aqui"
                    title="Name project"
                    tech={['HTML', 'CSS', 'JavaScript']}
                />

                <SecondaryProject 
                    img={projectOne}
                    desc="Descrição do projeto aqui"
                    title="Name project"
                    tech={['HTML', 'CSS', 'JavaScript']}
                />

            <SecondaryProject 
                    img={projectOne}
                    desc="Descrição do projeto aqui"
                    title="Name project"
                    tech={['HTML', 'CSS', 'JavaScript']}
                />

               

            </div>
        </section>
    )
};

export default ProjectsSection;