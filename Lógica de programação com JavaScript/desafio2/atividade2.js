alert("bem-vindo ao jogo do negativo ou positivo!");

let pergunta = prompt("digite um número que diremos se é negativo ou positivo!")
let numero = parseFloat(pergunta);


if (isNaN(numero)) {
    alert("Por favor, digite um número válido.");
} else {
    if (numero < 0) {
        alert("Este número (" + numero + ") é negativo!");
    } else {
        alert("Este número (" + numero + ") é positivo!");
    }
}