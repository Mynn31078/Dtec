//Método para fazer requisições
fetch("https://pokeapi.co/api/v2/pokemon/120")
.then(response => {
    return response.json()
})
.then(data => {
    console.log(data.name)
})