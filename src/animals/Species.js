import React from 'react';

function Species(props) {
  return(
    //props.quantity not yet defined
    <div className='Species col-4 col-md'>
      <div>
        {props.species}
      </div>
      <div className='mb-1'>
        <span>Owned: {props.quantity}</span>
      </div>
      <div className='row col-lg-8 offset-lg-2 col-10 offset-1'>
        <button>Buy ${props.price}</button>
      </div>
      <div className='my-2 row col-lg-8 offset-lg-2 col-10 offset-1'>
        <button>Feed All</button>
      </div>
    </div>
  )
}

export default Species;