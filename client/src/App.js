import React from 'react';


import {BrowserRouter as Router} from 'react-router-dom'

import Header from './Components/Headers/Header'

import MainPages from './Components/mainPgaes/Pages'

function App() {
 
  return (
 

      <Router>

          <div className="App">

            <Header/>   

            <MainPages/>

          </div>

      </Router>


  );
}

export default App;
