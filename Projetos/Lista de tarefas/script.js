function adicionarTarefa() {

    const inforUsuario = document.querySelector("#novaTarefa").value;
    const resultado = document.querySelector("#lista")

    resultado.innerHTML += `<li>${inforUsuario}</li>`

}