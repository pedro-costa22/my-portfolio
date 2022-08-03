import './App.css';
import { useEffect, useState } from 'react';

import Theme from '../theme/Theme';
import Header from '../pages/view/Header/Header';
import Main from '../pages/view/Main/Main';



function App() {

  const [darkMode, setDarkMode] = useState(true);


  return (
    <>
      <Theme.Provider value={{darkMode, setDarkMode}}>
        <Header />
        <Main />
      </Theme.Provider>
      
    </>
  );
}

export default App;
