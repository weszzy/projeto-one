alert ("bem-vindo ao jogo perguntas fute!")
alert("cada pergunta valerá 30 pontos e ao fazer 100 pontos você vence!")

let jogador = prompt("como você se chama?")

let pontos = 0

let pergunta1 = prompt("quantas copas o brasil tem?");
let pergunta2 = prompt("qual foi o primeiro time do pelé?");
let pergunta3 = prompt("qual é o primeiro nome do messi?");
let pergunta4 = prompt("qual país nasceu o jogador cristiano ronaldo?")
let pergunta5 = prompt("neymar jogou no santos? responda com sim ou não");

let resposta1 = "5"
let resposta2 = "santos"
let resposta3 = "lionel"
let resposta4 = "portugal"
let resposta5 = "sim"

if (pergunta1 === resposta1) {
    pontos += 30;
} else {
    alert("errou a primeira, o brasil tem 5 copas.");
}

if (pergunta2 === resposta2) {
    pontos += 30;
} else {
    alert("errou a segunda, pelé jogou no santos.");
}

if (pergunta3 === resposta3) {
    pontos += 30;
} else {
    alert("errou a terceira, a resposta certa é lionel.");
}

if (pergunta4 === resposta4) {
    pontos += 30;
} else {
    alert("errou a quarta, cristiano nasceu em portugal.");
}

if (pergunta5 === resposta5) {
    pontos += 30;
} else {
    alert("errou a quinta, neymar jogou sim no santos.");
}

if (pontos >= 100) {
    alert("parabéns, " + jogador + ", tu fez (" + pontos + ") pontos e venceu!!");
} else {
    alert("ih, " + jogador + ", tu ficou abaixo de 100 pontos e perdeu :c");
}