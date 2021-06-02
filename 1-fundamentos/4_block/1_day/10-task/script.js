const nameChessPieces = 'rei';

switch (nameChessPieces.toLowerCase()) {
  case 'peão':
    console.log('Movimenta 1 casa pra frente e come na diagonal, de início ele anda 2 casas');
    break;

  case 'torre':
    console.log('Movimenta na horizontal e vertical');
    break;

  case 'cavalo':
    console.log('Movimenta em formato de "L", ou seja movimenta 3 casas e depois vira 2 casas');
    break;

  case 'rainha':
    console.log('Movimenta na diagonal, horizontal e vertical');
    break;

  case 'bispo':
    console.log('Bispo movimenta na diagonal');
    break;

  case 'rei':
    console.log('Rei movimenta uma casa independente da direção');
    break;

  default:
    console.log('Peça não encontrada');
    break;
}