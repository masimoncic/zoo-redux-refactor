const INITIAL_STATE = { 
  current: 100
}

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'CHANGE_MONEY':
      return {...state, current: action.payload }
    default:
      return state;
  }
}