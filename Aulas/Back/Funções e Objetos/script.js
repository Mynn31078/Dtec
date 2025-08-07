/*/<---- FUNÇÕES DECLARADAS --->

//criação da função
function soma (a,b){
    return a + b
}

function saudacao(){
    console.log("Boa Tarde!")
}

//utilização da função
console.log(soma(3,5))
const resultado = soma(10,8)
console.log (resultado)
console.log (soma(2,9))
saudacao()*/

//<--FUNÇÕES ANÔNIMAS-->
function raiz (n){
    return n ** 0.5
}

console.log (raiz(9))

//<--ARROW FUNCTION-->
const raizQuadrada = (n) => n ** 0.5;
console.log(raizQuadrada(9))
