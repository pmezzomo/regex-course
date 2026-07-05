const texto = 'Bom\ndia'

console.log(texto.match(/./gi))

//dotall - algumas linguagens tem um flag /exp/s, mas JS não. Aqui ele nao leu o \n
