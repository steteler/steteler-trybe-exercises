const hydrate = (str) => {
  const cupsOfWater = str.match(/\d+/g);
  const sumResult = cupsOfWater.reduce((acum, cur) => acum += parseInt(cur), 0);
  return sumResult > 1 ? `${sumResult} copos de água` : `${sumResult} copo de água`;
};

module.exports = hydrate;