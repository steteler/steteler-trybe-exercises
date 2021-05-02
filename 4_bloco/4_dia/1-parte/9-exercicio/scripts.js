const info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

const info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell"s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (const attributes in info) {
  if (info[attributes] === 'Sim' && info2[attributes] === 'Sim') {
    console.log('Ambos recorrentes');
  } else {
    console.log(`${info[attributes]} e ${info2[attributes]}`);
  }
}
