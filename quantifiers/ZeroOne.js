const texto = 'De Longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

//? -> zero ou um (opcional)
//Nesse exemplo o ultimo o de 'fogo'antes de ? pode ou nao existir. o é opcional
const regex = /fogo?/gi
console.log(texto.match(regex))
console.log(texto2.match(regex))
