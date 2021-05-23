import React from 'react';
import {v4 as uuidv4} from 'uuid';

import gameData from '../utils/gameData';
import Species from './Species'
import './SpeciesContainer.css'

function SpeciesContainer() {
  let allSpecies = [];
  for (let species in gameData.animalData) {
    allSpecies.push(
      <Species
        species={species}
        speciesData={gameData.animalData[species]}
        key={uuidv4()} 
      />
    )
  }
  return(
    <div className='SpeciesContainer row'>
      {allSpecies}
    </div>
  )
}

export default SpeciesContainer;