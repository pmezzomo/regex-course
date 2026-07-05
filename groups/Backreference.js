const texto = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'

console.log(texto.match(/<(\w+)>.*<\/\1>/g))

const texto1 = 'Lentamente é a mente muito lenta'
//Aqui tem dois grupos: lenta e mente. Sao retrovisores \2 e \1. O valor do grupo é guardado
console.log(texto1.match(/(lenta)(mente).*\2.*\1/gi))
console.log(texto1.match(/(?:lenta)(mente).*\1/gi))

console.log(texto1.match(/(lenta)(mente)?/gi))
console.log(texto1.replace(/(lenta)(mente)/gi, '$2 ganhou'))
