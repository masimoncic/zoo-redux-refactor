export const changeMoney = (current, add) =>{
  return {
    type: 'CHANGE_MONEY',
    payload: current + add
  }
}

//incomeplete
export const buyAnimal = (price, individual) => {
  return {
    type: 'BUY_ANIMAL',
    payload: {price, individual}
  }
}