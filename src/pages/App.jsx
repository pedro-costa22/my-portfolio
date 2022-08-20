import { useState } from 'react';

import Theme from '../theme/Theme';
import Header from '../pages/view/Header/Header';
import Main from '../pages/view/Main/Main';
import ProjectsSection from './view/ProjectSection/ProjectsSection';
import Footer from './view/Footer/Footer';


import GlobalStyle from '../GlobalStyle';

function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <Theme.Provider value={{darkMode, setDarkMode}}>
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
