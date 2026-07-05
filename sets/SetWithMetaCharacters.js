const texto = '.$+*?-'

console.log(texto.match(/[+.?*$]/g))//nao precisa de escape dentro do conjunto, na maioria dos casos
console.log(texto.match(/[+.?*$]./g))
console.log(texto.match(/[$-?]/g)) //isso é um intervalo (range)

//Não é um intervalo
console.log(texto.match(/[$\-?]/g))
console.log(texto.match(/[-$?]/g))
console.log(texto.match(/[-?]/g))

//pode precisar de escape dentro do conjunto: - [] ˆ
