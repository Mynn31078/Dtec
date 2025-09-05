//Referências dos elementos HTML
const cidadeInput = document.getElementById("cidadeInput")
const buscarBtn = document.getElementById("buscarBtn")
const container = document.getElementById("container")

document.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        event.preventDefault()
        buscarBtn.click()
    }
})

//Adiciona um "ouvinte" ao evento clique do botão
buscarBtn.addEventListener('click', () => {
    const nomeCidade = cidadeInput.value.trim()

    if (nomeCidade === '') {
        alert("Digite o nome de uma cidade")
        return;
    }
    const url = `https://nominatim.openstreetmap.org/search?q=/${encodeURIComponent(nomeCidade)}&format=jsonv2`

    fetch(url)
        .then(response => {

            if (!response.ok) {
                throw new Error('Cidade não encontrada')
            }

            return response.json();
        })
        .then(data => {
            const cidade = data[0]

            const longitude = cidade.lon
            const latitude = cidade.lat

            const url2 = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current=is_day,temperature_2m`

            fetch(url2)
                .then(response =>{
                    return response.json()
                })
                .then(data => {
                    
                    const local = data
                    container.innerHTML = `
                    <h1>${local.current.temperature_2m}</h1>
                    <p>${local.current.is_day}</p>
                    `
                })



        })

        .catch(error => {
            console.error(error)
            container.innerHTML = `<p style = "color: red;">Erro: ${error.message}</p>`
        })
})
