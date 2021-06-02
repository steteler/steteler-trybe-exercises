// Parte 10
const productCost = 200;
const saleValue = 270;
let profit;

if (productCost >= 0 || saleValue >= 0) {
  profit = (saleValue - (productCost + (productCost * 0.20)));
  console.log(profit);
} else {
  console.log('Erro, o valor não pode ser negativo');
}