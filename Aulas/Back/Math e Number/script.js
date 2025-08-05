let num = 9.4

//Arredondamento para baixo
let resultado = Math.floor(num)
console.log(resultado)

//Arredondamento para cima
resultado = Math.ceil(num)
console.log(resultado)

//Arredondamento padrão
resultado = Math.round(num)
console.log(resultado)

//Encontrar o maior valor
let maior = Math.max(1,5,300,-8)
console.log(maior)

//Encontrar o menor valor
let menor = Math.min(1,5,300,-8)
console.log(menor)

//Gerar número aleatório
let aleatorio = Math.random()
console.log(aleatorio)

//Gerar número aleatório em um intervalo
let minimo = 5
let maximo = 10

let numeroAleatorio = Math.random() * (maximo - minimo) + minimo
console.log(numeroAleatorio)