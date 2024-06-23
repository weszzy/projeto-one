alert("Olá!")
let perguntadia = prompt("Que dia da semana é hoje?").toLowerCase();

let diadasemana = "Boa semana!";
let finaldesemana = "Bom final de semana!";

if (perguntadia === "segunda" || perguntadia === "terça" || perguntadia === "quarta" || perguntadia === "quinta" || perguntadia === "sexta") {
    alert(diadasemana);
} else if (perguntadia === "sábado" || perguntadia === "domingo") {
    alert(finaldesemana); 
}    else {
        alert("Não entendi. Tente novamente!");
    };
