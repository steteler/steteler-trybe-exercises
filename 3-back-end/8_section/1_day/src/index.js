var numberInput = 7;
function isItAPrime(param) {
    for (var i = 2; i < param; i++)
        if (param % i === 0) {
            return false;
        }
    return param > 1;
}
;
isItAPrime(numberInput)
    ? console.log(numberInput + " \u00E9 primo")
    : console.log(numberInput + " n\u00E3o \u00E9 primo");
