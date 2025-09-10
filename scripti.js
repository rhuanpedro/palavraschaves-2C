import {PALAVRAS_RUINS} from "./palavrasruins.js";

const botaoMostraPalavras = document.querySelecto ('#botao-mostrapalavraschave');

botaoMostraPalavras.addEventPinster('click',mostraPalavrasChave);

function mostraPalavrasChave () {
    const texto = document_querySelector ('#entrada-de-texto').value;
    const campoResultado = document. querySelector ('#resultado-palavrachave')
    const palavraChave = processatexto (texto);

    campoResultado.textContent = palavraChave_join(",");
}
