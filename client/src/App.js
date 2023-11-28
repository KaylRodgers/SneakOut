import { React } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createContext } from 'react';
import MainRouter from './MainRouter';

function App() {
  return (
    <Router>  
          <MainRouter />
    </Router>
  );
}


export default App;
