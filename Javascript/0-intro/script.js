console.log("hello world")
//alert("Ola mundo") - usado para criar combobox ou alertas de sistema


//VARIAVEIS NO JAVASCRIPT

let variavelExemplo = 0;
let variavelExemplo2 = "texto aqui"
console.log(variavelExemplo)
console.log(variavelExemplo2)

//TIPOS DE DADOS
//boolean, null, undefined, string, number

let variavelA = "isso é um texto" //string
console.log(variavelA)

let variavelB = 10 //number
console.log(variavelB)

let string1 = "1"
let string2 = "1"
console.log(string1 + string2) //o javascript concatena com operador de soma

let variavelUndefined
console.log(variavelUndefined)

let variavelNull = null
console.log(variavelNull)

let isTrue = true
console.log(isTrue)

//OPERADORES 
// + adição, - subtração, * multiplicação, / divisão, % modulo, ++ incremento, -- decremento

let a = 10
let b = 20
let operacao = 0

operacao = a + b
console.log(operacao)

operacao = a - b
console.log(operacao)

operacao = a * b
console.log(operacao)

operacao = a / b
console.log(operacao)

operacao = a % b
console.log(operacao)

operacao = ++a
console.log(operacao)

operacao = --a
console.log(operacao)  

//COMPARADORES === Esses 3 iguais comparam não só valor, mas como tipo

let tres = "tres"
let tresNumero = 3
console.log(tres === tresNumero) //deve aparecer false
console.log(tres !== tresNumero) //deve aparecer true

//algortimos rapidos

let idade = 30

if(idade>20){
    console.log("a idade é: ", idade)
}else{
    console.log("sei nao tio")
}


//SWITCH

let nota = 5.0, nota2 = 5.8
let media = (nota + nota2)/2
let validador = false

console.log(media)

if(media>5){
    validador = true
}
else{
    validador = false
}


switch (validador) {
    case true:
        console.log("voce passou com media", media)
        break;
    case false:
        console.log("voce reprovou mané")
        break;
    default:
        break;
}