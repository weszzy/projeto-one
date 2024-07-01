//1. Criar uma função que exibe "Olá, mundo!" no console.

function olaMundoConsole() {
    console.log("Olá Mundo");
}

olaMundoConsole();



//2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function olaNome(nome) {
    console.log(`Olá, ${nome}!`);
}

olaNome("juca");



//3.Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function numeroDobro(numero){
    return numero * 2;
}

let resultadoDobro = numeroDobro(44);
console.log(resultadoDobro);



//4. Criar uma função que recebe três números como parâmetros e retorna a média deles.

function calcularMedia(media1, media2, media3) {
    return (media1 + media2 + media3) / 3;
}
let media = calcularMedia(5, 14, 9);
console.log(media);



//5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function valorMaior(valor1, valor2){
return (valor1 > valor2 ? valor1 : valor2);
}
let numeroMaior = valorMaior(10, 16)
console.log(numeroMaior);



//6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function multiplicaNumero(numeroM){
    return numeroM * numeroM;
}
let resultado = multiplicaNumero(10);
console.log(resultado)