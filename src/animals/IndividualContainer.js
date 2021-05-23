import React from 'react';
import { connect } from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import Individual from './Individual'

function IndividualContainer (props) {
  let species = props.match.params.species;

  return(
    <div>
      {species}
      {props.animals[species].map(individual => 
      <Individual 
        name={individual.name}
        hungerMeter={individual.hungerMeter}
        key={individual.id} />
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {animals: state.animals}
}

export default connect(mapStateToProps, null)(IndividualContainer);