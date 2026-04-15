let numeroSecreto = Math.floor(Math.random()  * 10) + 1;

function verificar() {
    let palpite = document.getElementById("inputNumero").value;
    let mensagem = document.getElementById("mensagem");

    if (palpite == numeroSecreto) {
        mensagem.innerText = "voce acertou";
    } else if (palpite < numeroSecreto) {
        mensagem.innerText = "aumente o numero!";
    } else {
        mensagem.innerText = "diminua o numero!"
    }
}