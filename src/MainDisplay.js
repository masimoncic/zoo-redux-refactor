import React from 'react';
import {connect} from 'react-redux';
import { changeMoney } from './actions';

function MainDisplay(props) {
  return(
    <div className='MainDisplay'>
      MAIN DISPLAY
      {props.money}
      <button onClick={(e) => props.changeMoney(props.money, 100)}>
        Add money
      </button>
    </div>
  )
}



const mapStateToProps = state => {
  return { money: state.money.current }
}

export default connect(mapStateToProps, {changeMoney})(MainDisplay);