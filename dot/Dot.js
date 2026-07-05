// . é um coringa, valido para uma posição

const texto = '1,2,3,4,5,6,7,,8,9,0'

//o ponto significa que ele vai pegar qlqr coisa entre 1 e 2 
console.log(texto.match(/1.2/g))
console.log(texto.match(/1..2/g))
console.log(texto.match(/1..,/g))

const notas = '8.3,7.1,8.8,10.0'
//Significa 8 seguido de dois outros caracteres
console.log(notas.match(/8../g))
//Qlqr coisa q tenha um ponto e alguma coisa
console.log(notas.match(/.\../g))
