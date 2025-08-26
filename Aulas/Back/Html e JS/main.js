//ACESSANDO DIVS
const numero1 = document.querySelector(".num1")
const numero2 = document.querySelector(".num2")

//ACESSANDO INFORMAÇÃO DAS DIVS
const num1 = numero1.textContent
const num2 = numero2.textContent

console.log(num1)
console.log(num2)

//PROCESSAMENTO DAS INFORMAÇÕES
const soma = Number(num1) + Number(num2)

//SAÍDA
//ACESSANDO A DIV QUE MOSTRARÁ O RESULTADO
const resultado = document.querySelector(".resultado")

//INSERINDO O VALOR DA SOMA NA DIV
resultado.innerHTML = `<p>${soma}</p>`