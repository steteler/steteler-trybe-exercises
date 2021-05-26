const names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (const index of Object.values(names)) {
  console.log(`Olá ${index}`);
}