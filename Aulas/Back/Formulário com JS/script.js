//Acessando a tag fotmulário
const form = document.querySelector(".formulario")
const resultado = document.querySelector(".resultado")

form.addEventListener("submit", function(evento){
    evento.preventDefault();


    const nome = form.querySelector(".nome").value
    const sobrenome = form.querySelector(".sobrenome").value
    const peso = form.querySelector(".peso").value
    const altura = form.querySelector(".altura").value

    resultado.innerHTML += `<p>${nome} ${sobrenome}, ${peso}, ${altura}</p>`
    form.reset()
})
