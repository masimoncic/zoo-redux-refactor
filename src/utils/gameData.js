//stores the constant but configurable data about the games. 
//all values can be changed.  Animals in animalData can be added or removed.

const gameData = {
  animalData: {
    chimpanzees: {
      foodConsumption: 4,
      guageDecreaseRate: 1,
      guageIncreasePerFeed: 40,
      price: 300,
      value: 300,
      imgUrl: 'https://images.unsplash.com/photo-1594068304148-3e33049a2651?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    tigers: {
      foodConsumption: 10,
      guageDecreaseRate: 3,
      guageIncreasePerFeed: 60,
      price: 1000,
      value: 3000,
      imgUrl: 'https://images.unsplash.com/photo-1549480017-d76466a4b7e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1038&q=80',
    },
    penguines: {
      foodConsumption: 1,
      guageDecreaseRate: 1,
      guageIncreasePerFeed: 60,
      price: 3000,
      value: 1000,
      imgUrl: 'https://images.unsplash.com/photo-1518734040184-adad8323b124?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1889&q=80',
    },
    aligators: {
      foodConsumption: 10,
      guageDecreaseRate: 3,
      guageIncreasePerFeed: 40,
      price: 5000,
      value: 10000,
      imgUrl: 'https://images.unsplash.com/photo-1520542099817-0d19524eccca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
    },
    pandas: {
      foodConsumption: 1,
      guageDecreaseRate: 1,
      guageIncreasePerFeed: 30,
      price: 50000,
      value: 20000,
      imgUrl: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
    },
    elephants: {
      foodConsumption: 30,
      guageDecreaseRate: 3,
      guageIncreasePerFeed: 30,
      price: 80000,
      value: 150000,
      imgUrl: 'https://images.unsplash.com/photo-1581852017103-68ac65514cf7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
    },
  },
  baseIncome: 500,
  baseMoney: 1000,
  baseFood: 50,
  baseFoodCost: 100
};

export default gameData;