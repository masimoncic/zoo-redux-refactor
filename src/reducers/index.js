/*import {combineReducers} from 'redux';

import moneyReducer from './moneyReducer';

export default combineReducers({
  money: moneyReducer
}) */

import gameData from '../utils/gameData';

let initialAnimals = {};
for (let species in gameData.animalData) {
  //initialAnimals[species] = [];
  //test values
  initialAnimals[species] = [{name: species.substr(0, species.length-1), hungerMeter: 70, id: `${species}1`}, {name: species.substr(0, species.length-1), hungerMeter: 70, id: `${species}2`}]
}

const INITIAL_STATE = { 
  animals: initialAnimals,
  money: gameData.baseMoney,
  income: gameData.baseIncome,
  food: gameData.baseFood,
  foodCost: gameData.baseFoodCost
}

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'CHANGE_MONEY':
      return {...state, money: action.payload }
    default:
      return state;
  }
}