export const changeMoney = (current, add) =>{
  return {
    type: 'CHANGE_MONEY',
    payload: current + add
  }
}