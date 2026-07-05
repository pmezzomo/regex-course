const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g))
console.log(texto.match(/a-c/g))//não define o range

console.log(texto.match(/[A-z]/g))// intervalo usam a ordem da tabela unicode - ASC. Nesse caso ele traz outros simbolos (simbolos extras) que estao na tabela UNICODE

//os intervalos tem que respeitar a ordem da tabela unicode. Fora da ordem ele traz erro
console.log(texto.match(/[a-Z]/g))
