// . ? * + - ^ $ | [] {} () \ :

const texto = '1,2,3,4,5,6,a.b c!d?e'
//para conseguir procurar um metacaracter como caracter é so usar o escape \
const regexPonto = /\./g
console.log(texto.split(regexPonto))
//No ultimo é 'ou espaço'
const regexSimbolos = /,|\.|\?|!| /g
console.log(texto.split(regexSimbolos))
