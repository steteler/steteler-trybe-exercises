const { readFile } = require("fs").promises;

async function getSimpsonById(id) {
  const simpsonsJson = await readFile("./simpsons.json", "utf-8");
  const simpsons = JSON.parse(simpsonsJson);

  const simpsonFound = simpsons.find((simpson) => Number(simpson.id) === id);

  if (!simpsonFound) {
    throw new Error('id não encontrado');
  }

  return simpsonFound;
}

async function main() {
  const simpsonFound = await getSimpsonById(1);
  const { id, name } = simpsonFound;
  console.log(`${id} - ${name}`);
}

main();