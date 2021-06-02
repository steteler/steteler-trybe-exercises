const wakeUp = () => 'Acordando!!';

const drinkCoffee = () => 'Bora tomar café!!';

const sleep = () => 'Partiu dormir!!';

const doingThings = (callback) => {
  console.log(callback());
};

doingThings(wakeUp);
doingThings(drinkCoffee);
doingThings(sleep);