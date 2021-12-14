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

//REPETIÇÕES FOR E WHILE

let i = 0
let repeticao = 10

for(i = 0; i<repeticao; i++ ){
    console.log("repetição nº " + (i+1))
}

let j = 1
let contagem = 10

while(j<=contagem){
    console.log("aumentando!! Contagem atual de: " + j)
    j++
}

if(j=10){
    console.log("chegou!")
}

//ARRAYS - sequencial, conjunto de dados, começa sempre do 0, da pra misturar os dados, o indice vai de 0 ate o numero de elementos
//duas formas para se criar arrays:
let vetor = new Array() //array vazia

let vetor2 = new Array("numero1", "numero2", "numero3", 4)
console.log(vetor2[1])
console.log(vetor2[3])


//Segunda forma

let vetor3 = ["teste1", "teste2", "teste3"] //dessa forma não precisa invocar o metodo

console.log(vetor3[2])

let contador = 0

for(contador = 0; contador<vetor3.length; contador++){
    console.log(vetor3[contador])
}

//OU

for(contador in vetor3){ //cada vez que passar no laço, vai pegar o indice de vetor3 e vai colocar dentro de contador, até acabar os valores de vetor3
    console.log(vetor3[contador])   
}

//FUNÇÔES


 