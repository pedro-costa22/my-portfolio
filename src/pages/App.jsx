import './App.css';
import { useEffect, useState } from 'react';

import Theme from '../theme/Theme';
import Header from '../pages/view/Header/Header';
import Main from '../pages/view/Main/Main';
import ProjectsSection from './view/ProjectSection/ProjectsSection';
import Footer from './view/Footer/Footer';
import Demo from '../components/demonstrative/Demo';

import GlobalStyle from '../GlobalStyle';



function App() {

  const [darkMode, setDarkMode] = useState(true);

  const [stateDemo, setStateDemo] = useState({
      demo: false,
      slide: []
  })


  return (
    <>
      <Theme.Provider value={{darkMode, setDarkMode, stateDemo, setStateDemo}}>
        {stateDemo.demo && <Demo slide={stateDemo.slide}/>}
        <GlobalStyle darkMode={darkMode}/>
        <Header />
        <Main />
        <ProjectsSection />
        <Footer />
      </Theme.Provider>
      
    </>
  );
}

export default App;
