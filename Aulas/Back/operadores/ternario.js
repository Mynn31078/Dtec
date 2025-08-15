const pontos = 900;

if(pontos >= 1000){
    console.log("Você é VIP")
} else{
    console.log("Você é COMUM")
}

//      Variável        Condição       True     False
const statusCliente = pontos >= 1000 ? "VIP" : "COMUM"
console.log(statusCliente)