import {combineReducers} from 'redux';

import moneyReducer from './moneyReducer';

export default combineReducers({
  money: moneyReducer
})