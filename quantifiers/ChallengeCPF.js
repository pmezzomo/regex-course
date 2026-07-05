const texto = `CPF dos aprovados: 
- 600.567.890-12
- 765.998.345-23
- 359.962.948-00
- 074.800.048-85`

console.log(texto.match(/\d{3}\.\d{3}.\d{3}-\d{2}/g))
