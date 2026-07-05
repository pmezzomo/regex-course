const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

//quantificaores sao gulosos (greedy). Comportamento padrao
console.log(texto.match(/<div>.+<\/div>/g))

console.log(texto.match(/<div>.*<\/div>/g))

console.log(texto.match(/<div>.{0,100}<\/div>/g))

//quantificaores nao gulosos (lazy).A ? define o lazy
console.log(texto.match(/<div>.+?<\/div>/g))
console.log(texto.match(/<div>.*?<\/div>/g))
console.log(texto.match(/<div>.{0,100}?<\/div>/g))
