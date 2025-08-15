const hora = 155; // simulação da hora atual
const resultado = document.getElementById('resultado')
if (hora >= 0 && hora <= 11) {
  console.log("Bom dia!");
} else if (hora >= 12 && hora <= 17) {
  console.log("Boa tarde!");
} else if (hora >= 18 && hora <= 23) {
  console.log("Boa noite!");
} else {
  resultado.innerHTML = ("Olá! (Hora inválida)");
}