-- anotação interessante:
-- LENGTH() - retorna a quantidade de bytes de uma string
-- CHAR_LENGTH() - retorna a quantidade de characters em uma string
-- exemplo: select length(_utf8 '€'), char_length(_utf8 '€') // 3, 1

-- requirement 1 // requisito 1
SELECT UCASE('trybe');
-- requirement 2 // requisito 2
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');
-- requirement 3 // requisito 3
SELECT CHAR_LENGTH('Uma frase qualquer');
-- requirement 4 // requisito 4
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);
-- requirement 5 // requisito 5
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');