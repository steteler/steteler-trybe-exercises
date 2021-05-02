const employeeGenerator = (fullName) => {
  let email = fullName.toLowerCase().split(' ').join('_').normalize('NFD');
  email = email.replace(/[\u0300-\u036f]/g, '');
  return { fullName, email: `${email}@trybe.com` };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('João Victor Kikuti'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};

console.table(newEmployees(employeeGenerator));