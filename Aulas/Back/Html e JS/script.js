//1.Mostre um alerta com o texto do <h1> ao clicar no botão Alerta.

function mostrarAlerta(){
const h1 = document.querySelector("#titulo")
const conteudoH1 = h1.textContent

alert(conteudoH1)
}

// 2. Altere o texto do primeiro <p> "Texto Alterado" usando JS.

const p = document.querySelector(".texto")
p.textContent = "Texto Alterado"