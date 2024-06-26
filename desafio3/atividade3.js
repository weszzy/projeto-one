let contador = prompt("Digite um número para iniciar a contagem regressiva");

contador = parseInt(contador, 10);

if (isNaN(contador) || contador <= -1) {
    alert("Por favor, digite um número maior que 0.");
} else {
    while (contador > -1) {
        console.log('Executando a decrementação ' + contador);
        contador--;
    }
}

console.log("Contagem regressiva concluída!");


