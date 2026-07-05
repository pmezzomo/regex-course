const texto = 'De Longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

//* -> zero ou mais
//o asterisco faz q pegue ou nao o. Se pegar, pega todas as ocorrencias, no caso a letra o
const regex = /fogo*/gi
console.log(texto.match(regex))
console.log(texto2.match(regex))
