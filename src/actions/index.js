export const changeMoney = (add) =>{
  return {
    type: 'CHANGE_MONEY',
    payload: add
  }
}

//incomeplete
export const addAnimal = (individual, species) => {
  return {
    type: 'ADD_ANIMAL',
    payload: {individual, species}
  }
}