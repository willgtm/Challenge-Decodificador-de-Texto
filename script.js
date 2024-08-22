var criptografarbutton = document.querySelector(".encrypt_button");
var descriptografarbutton = document.querySelector(".decrypt_button");
var boneco = document.querySelector(".boneco");
var section = document.querySelector(".no_text");
var resultado = document.querySelector(".text_result");

criptografarbutton.onclick = criptografar;
descriptografarbutton.onclick = descriptografar;

function criptografar(){
    hide();
    var text_msg = recuperarTexto()
    resultado.textContent = criptografarTexto(text_msg);
    mostrarBotaoCopiar();
}

function descriptografar(){
    hide();
    var text_msg = recuperarTexto()
    resultado.textContent = descriptografarTexto(text_msg);
    mostrarBotaoCopiar();
}

function mostrarBotaoCopiar() {
    btnCopiar.classList.remove("ocultar");
}

function recuperarTexto(){
    var text_msg = document.querySelector(".text_msg")
    return text_msg.value
}

function hide(){
    boneco.classList.add("ocultar");
    section.classList.add("ocultar");
}

function criptografarTexto(mensagem){
    var texto = mensagem;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function descriptografarTexto(mensagem) {
    var texto = mensagem;
    var textoFinal = "";

    textoFinal = texto.replace(/ai/g, "a")
                      .replace(/enter/g, "e")
                      .replace(/imes/g, "i")
                      .replace(/ober/g, "o")
                      .replace(/ufat/g, "u");

    return textoFinal;
}

const btnCopiar = document.querySelector(".copy_button"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var conteudo = document.querySelector(".text_result").textContent;
    navigator.clipboard.writeText(conteudo);
});

window.onload = function() {
    btnCopiar.classList.add("ocultar"); 
};