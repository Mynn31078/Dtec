//importação do express
const express = require('express');

//Importação do cors
const cors = require('cors');

//criar a aplicação
const app = express();

//permitir trabalhar com JSON
app.use(express.json());

//Permitir trabalhar com cors
app.use(cors())

//porta onde a API vai rodar
const PORT = 3001;

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id 
    const usuario = usuarios.find(u => u.id == id)

    res.json(usuario)
})

//Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta${PORT}`)
})

let usuarios = [
    { id: 1, nome: "Yasmin", idade: 17 },
    { id: 2, nome: "Manuella", idade: 16 },
    { id: 3, nome: "Karol", idade: 18 }
]

app.get('/', (request, response) => {
    response.send("TESTE")
})
app.get('/usuarios',(req, res) => {
    res.json(usuarios)
})