function media(n1,n2,n3){
    let media = (n1+n2+n3)/3
    return parseFloat(media.toFixed(2))
}

let mediaTurma = (m1,m2,m3) =>{
    let mediaTurma = (m1+m2+m3)/3.0
    return mediaTurma
}

let defineNotaFinal = (media) => {
    let notaFinal = null

    if(media<=4){
        notaFinal="MI"
    }else if(media>=5 && media <=8){
        notaFinal="MM"
    }else{
        notaFinal="SS"
    }

    switch (notaFinal) {
        case "MI":
            console.log("Sua nota é MI")
            break;
    
        case "MM":
            console.log("Sua nota é MM")
            break;

        case "SS":
            console.log("Sua nota é SS")
            break;

        default:
            break;
    }

    return notaFinal
}

let maiorNota = (nota) => {
    let maiorValor = 0
    let i = 0
    for(i in nota){
        if(nota[i]>maiorValor){
            maiorValor = nota[i]
        }
    }
    
    return maiorValor
}

let aprovacao = (media) => {
    let status = "Cursando"
    if(media>=5){
        status = "Aprovado!"
    }else{
        status = "Reprovado!"
    }
    return status
}

let aluno1 = [5.5, 6.7, 5.8]
let aluno2 = [8.5, 9.7, 8.8]
let aluno3 = [1.5, 2.7, 4.8]
let turma = [aluno1, aluno2, aluno3]
let contador = 0

let mediaAluno1 = media(5.5, 6.7, 5.8)
let mediaAluno2 = media(8.5, 9.7, 8.8)
let mediaAluno3 = media(1.5, 2.7, 4.8)

let ArredondaMedia1 = parseFloat(mediaAluno1.toFixed(2))
let ArredondaMedia2 = parseFloat(mediaAluno2.toFixed(2))
let ArredondaMedia3 = parseFloat(mediaAluno3.toFixed(2))


let notaFinalAluno1 = defineNotaFinal(mediaAluno1)
let notaFinalAluno2 = defineNotaFinal(mediaAluno2)
let notaFinalAluno3 = defineNotaFinal(mediaAluno3)

for(contador in turma){
    let resultadoAluno1 = maiorNota(turma[contador])
    console.log(resultadoAluno1)
}

let mediaTurmaTotal = mediaTurma(mediaAluno1, mediaAluno2, mediaAluno3)

let aprovado1 = aprovacao(mediaAluno1)
let aprovado2 = aprovacao(mediaAluno2)
let aprovado3 = aprovacao(mediaAluno3)


console.log("Aluno1 tem média de " + ArredondaMedia1+ ", com menção final " + notaFinalAluno1 + ", com status de " + aprovado1)
console.log("Aluno2 tem média de " + ArredondaMedia2+ ", com menção final " + notaFinalAluno2 + ", com status de " + aprovado2)
console.log("Aluno3 tem média de " + ArredondaMedia3+ ", com menção final " + notaFinalAluno3 + ", com status de " + aprovado3 )

console.log("A turma tem media de: ", mediaTurmaTotal)