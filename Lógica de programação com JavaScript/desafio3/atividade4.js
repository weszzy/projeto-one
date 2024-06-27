let valor = prompt("Digite um número para iniciar a contagem progressiva");

valor = parseInt(valor, 10);

if (isNaN(valor) || valor < 0) {
    alert("Por favor, digite um número válido maior ou igual a 0.");
} else {
    let contador = 0;
    while (contador <= valor) {
        console.log('Executando a iteração ' + contador);
        contador++;
    }
    console.log("Contagem progressiva concluída!");
}