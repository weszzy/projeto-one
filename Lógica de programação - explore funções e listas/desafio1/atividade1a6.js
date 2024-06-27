let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function mostrarConsole(){
    console.log('O botão console foi clicado.');
}

function euamoJSConsole(){
    console.log('Eu amo JS!');
}

function perguntaCidade(){
    let cidade = prompt('Digita o nome de uma cidade do Brasil!');
    alert("Legal! Já estive em " + cidade + " e lembrei de você💗");
}

function botaoSoma(){
    let numero1 = Number(prompt('Digite o primeiro número: '));
    let numero2 = Number(prompt('Digite o segundo número: '));
    let resultado = numero1 + numero2;
    alert('O resultado da soma é: ' + resultado);
}

