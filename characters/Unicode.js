//No inicio...
//Um byte (8 bits) = 256 caracteres
//Simbolos, Pontuacao, A-Z, a-z, 0-9

//Depois...
//Dois bytes (16 bits) = 65500+ caracteres
//+Simbolos, + Pontuação, A-Z, a-z, 0-9

//Unicode
//Quantidade de Bytes Variavel - Expansivel
//Suporta mais de 1 Milhao de caracteres
//Atualmente tem mais de 100.000 caracteres atribuidos

//https://unicode-table.com/pt/

const texto = 'ĆĀĐ'
console.log(texto.match(/\u0106|\u0100|\u0110/g))
