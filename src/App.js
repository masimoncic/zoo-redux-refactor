import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainDisplay from './MainDisplay';
import SpeciesContainer from './animals/SpeciesContainer';
import IndividualContainer from './animals/IndividualContainer'



function App() {
  return (
    <div className='App container'>
      <BrowserRouter>
        <div>
          <MainDisplay />
          <Route path='/animals' component={SpeciesContainer} />
          <Route path='/animals/:species' component={IndividualContainer} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
