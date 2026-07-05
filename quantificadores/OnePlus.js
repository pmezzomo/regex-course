const texto = 'De Longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

//+ -> um ou mais ocorrencia de um caracter
//Precisa que o aparece uma ou mais vezes
const regex = /fogo+/gi
console.log(texto.match(regex))
console.log(texto2.match(regex))

const texto3 = 'Os numeros: 0123456789'
console.log(texto3.match(/[0-9]/g))
console.log(texto3.match(/[0-9]+/g))
console.log(texto3.match(/\d+/g))
console.log(texto3.match(/\d/g))
