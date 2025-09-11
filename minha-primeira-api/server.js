//Importação do Express
const express = require('express');
//Importação do cors
const cors = require('cors');

//Criar a Aplicação 
const app = express();

//Permitir trabalhar com JSON
app.use(express.json());
//Permitir trabalhar com cors
app.use(cors())

// Porta onde a API vai rodar
const PORT = 3001;



let usuarios = [
    { id: 1, nome: "Yasmin", idade: 25 },
    { id: 2, nome: "Manuella", idade: 30 },
    { id: 3, nome: "Karol", idade: 22 },
    { id: 4, nome: "Luciana", idade: 18 },
    { id: 5, nome: "Luciana Maria", idade: 35 }
]


app.get('/', (request, response) => {
    response.send("PÁGINA INICIAL");
})

app.get('/usuarios', (request, response) => {
    response.json(usuarios);
})


app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id
    const usuario = usuarios.find(u => u.id == id)

    if (usuario) {
        res.json(usuario)
    } else {
        res.status(404).json({ mensagem: "Usuário Não Encontrado" })
    }
})

app.get('/usuarios/nome/:nome', (req, res) => {
    const buscaNome = req.params.nome.toLowerCase()
    const resultados = usuarios.filter(u => u.nome.toLowerCase().includes(buscaNome))
    if (resultados.length > 0) {
        res.json(resultados)
    } else {
        res.status(404).json({ mensagem: "Usuário Não Encontrado" })
    }

})

app.delete('/usuarios/:id', (req, res) => {
    const id = req.params.id
    usuarios = usuarios.filter(u => u.id != id);

    res.json({ mensagem: "usuário removido com sucesso" })

})

app.post('/usuarios', (req, res) => {
    const novoUsuario = {
        id: usuarios.length + 1,
        nome: req.body.nome,
        idade: req.body.idade
    };

    usuarios.push(novoUsuario)
    res.status(201).json(novoUsuario);
})

app.put('/usuarios/:id', (req, res) => {
    const id = req.params.id
    const nome = req.body.nome
    const idade = req.body.idade

    const usuario = usuarios.find(u => u.id == id)

    if (!usuario) {
        return res.status(404).json({ mensagem: "Usuário Não Encontrado" })
    }

    usuario.nome = nome || usuario.nome
    usuario.idade = idade || usuario.idade
    res.json(usuario)
})
app.get('/usuario/idade/:idade', (req, res) => {
    const buscarIdade = req.params.idade
    const idadeUsuario = usuarios.filter(u => u.idade == buscarIdade)

    if(idadeUsuario.length > 0){
        res.json(idadeUsuario)
    }
    else{
        res.status(404).json({mensagem: "Usuário Não Encontrado"})
    }
})

//Inicia o servidor 
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta${PORT}`)
})