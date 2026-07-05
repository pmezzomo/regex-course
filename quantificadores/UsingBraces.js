const texto = 'O Joao recebeu 120 milhoes apostando 6 9 21 23 45 46.'

//para definir uma quantidade usa {}
//Procurar numeros que tem 1 ou 2 digitos
console.log(texto.match(/\d{1,2}/g))
//de 0 a 9 pega os numeros com dois digitos
console.log(texto.match(/[0-9]{2}/g))
console.log(texto.match(/\d{1,}/g))

//traz as letras com 7 caracteres e nesse caso nao considera as palavras acentuadas
console.log(texto.match(/\w{7}/g))

//para buscar com acentos e palavras com 7 caracteres ou mais (nao corta a palavra)
console.log(texto.match(/[\wõ]{7,}/g))
