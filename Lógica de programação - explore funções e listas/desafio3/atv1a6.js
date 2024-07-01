//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calculoImc(altura, peso) {
    return peso / (altura * altura);
}
let imc = calculoImc(1.75, 70);
console.log(imc);

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function fatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

let resultadoFatorial = fatorial(7);
console.log(resultadoFatorial);

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function dolarParaReal(dolar) {
    return dolar * 4.80;
}
let real = dolarParaReal(10);
console.log(real);


//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function areaPerimetro(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    return [area, perimetro];
}
let resultado = areaPerimetro(5, 10);
console.log(resultado);


//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function areaPerimetroCirculo(raio) {
    let area = 3.14 * (raio * raio);
    let perimetro = 2 * 3.14 * raio;
    return [area, perimetro];
}
let resultado2 = areaPerimetroCirculo(8);
console.log(resultado2);


//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
tabuada(12);