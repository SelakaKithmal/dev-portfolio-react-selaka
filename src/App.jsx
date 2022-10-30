import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import AppContext from './AppContext';
import MainApp from './MainApp';
import GlobalStyles from './theme/GlobalStyles';
import { lightTheme, darkTheme } from './theme/themes';
const firebaseConfig = {
  apiKey: "AIzaSyAxYPcDzn1lSdpD1qDwLTRbNYQB_X8SjeQ",
  authDomain: "selaka-portfolio.firebaseapp.com",
  projectId: "selaka-portfolio",
  storageBucket: "selaka-portfolio.appspot.com",
  messagingSenderId: "784832517356",
  appId: "1:784832517356:web:0e4fa5c7372ad1b3c2c1c9",
  measurementId: "G-DGZ3V06RV7"
};
function App() {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  window.matchMedia = null;
  const darkMode = useDarkMode(true);

  return (
    <AppContext.Provider value={{ darkMode }}>
      <ThemeProvider theme={darkMode.value ? darkTheme : lightTheme}>
        <GlobalStyles />
        <div className="App">
          <BrowserRouter>
            <MainApp />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
