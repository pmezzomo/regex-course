const texto = "Casa bonita é a casa amarela da esquina com a rua Azul"

//Armazena a expressao regular
//flag g  = global e i = ignore case
const regex = /casa/gi
console.log(texto.match(regex))
console.log(texto.match(/a b/))
