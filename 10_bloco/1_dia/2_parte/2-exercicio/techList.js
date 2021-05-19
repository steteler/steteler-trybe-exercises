const techList = (array, name) => {
  if (array.length === 0) return 'Vazio!';

  return array.sort().map((technology) => ({ tech: technology, name }));
};

module.exports = techList;