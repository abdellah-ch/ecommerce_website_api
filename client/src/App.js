import React from 'react';

import {DataProvider} from './GlobaleState'

import {BrowserRouter as Router} from 'react-router-dom'

import Header from './Components/Headers/Header'

import MainPages from './Components/mainPgaes/Pages'

function App() {
 
  return (
    <DataProvider>

      <Router>

          <div className="App">

            <Header/>   

            <MainPages/>

          </div>

      </Router>

    </DataProvider>

  );
}

export default App;
