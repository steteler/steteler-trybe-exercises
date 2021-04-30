const employeeGenerator = fullName => {
  const EMAIL = fullName.toLowerCase().split(' ').join('_').normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return { fullName, email: `${EMAIL}@trybe.com` };
};

const newEmployees = callback => {
  const employees = {
    id1: callback("João Victor Kikuti"),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};

console.table(newEmployees(employeeGenerator));