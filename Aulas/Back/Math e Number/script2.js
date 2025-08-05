const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `A raiz quadrada é:   ${Math.sqrt(numero)}<br>`
texto.innerHTML += `Se é inteiro:   ${Number.isInteger(numero)}<br>`
texto.innerHTML += `Se é NaN:   ${Number.isNaN(numero)}<br>`
texto.innerHTML += `Arredondamento para baixo:   ${Math.floor(numero)}<br>`
texto.innerHTML += `Arredondamento para cima:   ${Math.ceil(numero)}<br>`
texto.innerHTML += `Valor com duas casas decimais:   ${numero.toFixed(2)}<br>`

