//Referências dos elementos HTML
const paisInput = document.getElementById("paisInput")
const buscarBtn = document.getElementById("buscarBtn")
const container = document.getElementById("container")

//Adiciona um "ouvinte" ao evento clique do botão
buscarBtn.addEventListener('click', () => {
    const nomePais = paisInput.value.trim()

    if (nomePais === '') {
        alert("Digite o nome de um país")
        return;
    }
    const url = `https://restcountries.com/v3.1/name/${nomePais}`

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const pais = data[0];

            container.innerHTML = `
                <h2>${pais.name.common}</h2>
            
            `
        })


})
