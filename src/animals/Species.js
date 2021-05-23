import React from 'react';
import { connect } from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import { changeMoney } from '../actions';
import { addAnimal } from '../actions';

function Species(props) {
  const handleBuyAnimal = (e) => {
    console.log(props.species)
    if(props.money >= props.speciesData.price) {
      props.changeMoney(-props.speciesData.price)
      props.addAnimal({
        name: 1,
        //props.species.substr(0, species.length-1),
        hungerMeter: 70,
        living: true,
        id: uuidv4()
      }, 
      props.species)
    }
  }
  return(
    //props.quantity not yet defined
    <div className='Species col-4 col-md'>
      <div>
        {props.species}
      </div>
      <div className='mb-1'>
        <span>Owned: </span>
      </div>
      <div className='row col-lg-8 offset-lg-2 col-10 offset-1'>
        <button onClick={handleBuyAnimal} className='buy-btn btn btn-success'>Buy ${props.speciesData.price}</button>
      </div>
      <div className='my-2 row col-lg-8 offset-lg-2 col-10 offset-1'>
        <button className='feed-btn btn btn-info'>Feed All</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return { money: state.money}
}

export default connect(mapStateToProps, {changeMoney, addAnimal})(Species)