alert("olá, aqui você confere o saldo em conta")
let nome = prompt ("como se chama?")

let pergunta = prompt("por favor, " + nome + ", informe quanto irá depositar");
let saldoinicial = parseFloat(pergunta);

let saldomespassado = 509

let saldoatual = saldoinicial + saldomespassado;

alert(`${nome}, com a soma do seu depósito atual e do seu depósito do mês passado, seu saldo atual é: ${saldoatual}`);