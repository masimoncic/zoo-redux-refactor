import React from 'react';

function Individual(props) {
  return(
    <div className='Individual'>
      {props.name}
      {props.hungerMeter}
    </div>
  )
}

export default Individual;