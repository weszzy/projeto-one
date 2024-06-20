alert('Boas vindas ao nosso site!');


let nome = prompt("Qual é seu nome?");
let idade = prompt("Qual é sua idade?");
let mensagemDeErro = "Erro! Preencha todos os campos";


if (idade === "" || nome === "") {
    alert(mensagemDeErro); }
else if (idade >= 18){
    alert("Parabéns, " + nome +"! Você tem " + idade + " anos e já pode tirar a habilitação!");
} else {
    alert("Sinto muito, " + nome + "! Você ainda tem " + idade + " anos e não pode tirar a habilitação!");
}