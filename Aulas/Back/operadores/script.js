/*/Operador AND(&&)
//para gerar true , todas as condições devem ser verdadeiras (true)
const temDinheiro = true;
const estaSol = false;
const tenhoTempo = true;

const vouSair = temDinheiro && estaSol && tenhoTempo;
console.log(vouSair) */

/*/Operador OR (||)
//se pelo menos uma das condições for verdadeira retorna verdade (true)

const temDinheiro = true;
const estaSol = false;
const vouSair = temDinheiro || estaSol;

console.log(vouSair)

//Operador NOT(!) Inverte o valor Booleano

const estaChovendo = true;
console.log(!estaChovendo)

//Dupla Negação
console.log(!!123)
console.log(!!"texto")
console.log(!!"")
console.log(!!0)*/

//Exemplo de uso dupla negação (!!)

const email = ""
if(!!email){
    console.log("Email Preenchido")
}else{
    console.log("Campo de email vazio")
}

