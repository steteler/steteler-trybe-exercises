const customer = {
  firstName: 'Roberto',
  age: 22,
};

const createNewKeyValue = (object, key, keyValue) => {
  return object[key] = keyValue;
}

createNewKeyValue(customer, 'job', 'Teacher');

console.table(customer);