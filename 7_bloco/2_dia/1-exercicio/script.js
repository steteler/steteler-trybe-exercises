const customer = {
  firstName: 'Roberto',
  age: 22,
};

const createNewKeyValue = (object, key, keyValue) => {
  // eslint-disable-next-line no-param-reassign
  object[key] = keyValue;
};

createNewKeyValue(customer, 'job', 'Teacher');

console.table(customer);