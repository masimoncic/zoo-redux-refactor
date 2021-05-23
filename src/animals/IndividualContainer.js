import React from 'react';
import { connect } from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import Individual from './Individual'
import gameData from '../utils/gameData';
import './individualContainer.css';

function IndividualContainer (props) {
  let species = props.match.params.species;

  return(
    <div className='IndividualContainer row mb-2'>
      {props.animals[species].map(individual => 
        <div key={individual.id} className='col-4 col-md-2'>
          <Individual 
            name={individual.name}
            hungerMeter={individual.hungerMeter}
            imgUrl={gameData.animalData[species].imgUrl}
            foodConsumption={gameData.animalData[species].foodConsumption}
            living={individual.living} />
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {animals: state.animals}
}

export default connect(mapStateToProps, null)(IndividualContainer);