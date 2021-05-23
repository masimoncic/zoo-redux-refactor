import React from 'react';
import './Individual.css';

function Individual(props) {
  const alive =
    <div className='alive'>
         <img src={`${props.imgUrl}`} />
      <div className='individual-food-meter'>
        <div className='meter-container'>
          <div className='meter' style={{width: `${props.hungerMeter}%`}}></div>
          <div className='meter-text'>{props.hungerMeter}/100</div>
        </div>
        <button className='btn btn-info feed-btn'>Feed ({props.foodConsumption})</button>
      </div>
    </div>
  const dead = 
    <div className='dead'>
      <h4>Dead</h4>
      <div>
        <button className='btn btn-warning'>Remove Body</button>
      </div>
    </div>
    const living = () => {
      if(props.living) {
        return alive
      } else {
        return dead
      }
    }
  return(
    <div className='Individual'>
      {props.name}
      {living()}
    </div>
  )
}

export default Individual;