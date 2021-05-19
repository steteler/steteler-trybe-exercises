const encode = (string) => {
  for (let index = 0; index < string.length; index += 1) {
    string = string.replace('a', '1');
    string = string.replace('e', '2');
    string = string.replace('i', '3');
    string = string.replace('o', '4');
    string = string.replace('u', '5');
  }
  return string;
};

const decode = (string) => {
  for (let index = 0; index < string.length; index += 1) {
    string = string.replace('1', 'a');
    string = string.replace('2', 'e');
    string = string.replace('3', 'i');
    string = string.replace('4', 'o');
    string = string.replace('5', 'u');
  }
  return string;
};

exports.encode = encode;
exports.decode = decode;