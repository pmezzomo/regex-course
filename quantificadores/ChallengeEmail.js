const texto = `
Os emails dos convidados são:
- fulano@fulano.com.br
- xico@gmail.com
- p.mzzo@hotmail.com
- jaum@registro.br
- maria_silva@yahoo.com`

console.log(texto.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4}/g))
console.log(texto.match(/\w+@\w+\.\w{2,4}/g))
console.log(texto.match(/[\w.]+@\w+\.\w{2,6}/g))
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g))
