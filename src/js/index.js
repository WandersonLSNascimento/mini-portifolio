/* passo1 dar um jeito de pegar os elemntos que representam as abas no HTML 
passo2 dar um jeito de identificar o clike no elemnto da aba
passo3 quando o usuario clicar desmarcar a aba selecionada
passo4 marcar a aba clicada como selecionada
passo5 esconder o conteudo anterior
passo6 mostar o conteudo na aba selecionada */

const abas = document.querySelectorAll(".aba");
abas.forEach(aba => {
    aba.addEventListener("click", function () {

        if (aba.classList.contains("selecionado")) {
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    });
});

function selecionarAba(aba) {
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado")

    aba.classList.add("selecionado")
}

function mostrarInformacoesDaAba(aba){
        const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado");

        const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
        informacaoASerMostrada.classList.add("selecionado")
}