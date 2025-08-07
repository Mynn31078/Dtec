/*/Criação do Objeto
const pessoa = {
    nome : "Yasmin",
    sobrenome : "Brito",
    idade : "17"
}

//Acessando um atributo
console.log(pessoa.nome)
console.log(pessoa.sobrenome)
console.log(pessoa.idade)

function criarPessoas(nome, sobrenome, idade){
    return{
        nome,
        sobrenome,
        idade
    };
}
const pessoa2 = criarPessoas("Yasmin", "Brito", 17)
const pessoa3 = criarPessoas("Karol", "Boese", 17)

console.log(pessoa2.nome)
console.log(pessoa3.sobrenome)*/

function criaCachorro(nome, idade) {
    return {
        nome,
        idade,

        aniversario(){
            this.idade += 1
        }
    }
}

const cachorro1 = criaCachorro("Amora", 5)
console.log(cachorro1.idade)
cachorro1.aniversario()
console.log(cachorro1.idade)
