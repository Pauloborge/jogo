let numeroSecreto = Math.floor(Math.random()  * 10) + 1;

function verificar() {
    let palpite = document.getElementById("inputNumero").value;
    let mensagem = document.getElementById("mensagem");

    if (palpite == numeroSecreto) {
        mensagem.innerText = "isso ai!";
    } else if (palpite < numeroSecreto) {
        mensagem.innerText = "mais!";
    } else {
        mensagem.innerText = "menos!"
    }
}