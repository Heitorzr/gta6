/* 
Vaiavel: caixinha para guardar informações

palavrias magicas apara criar as variaveis

    var (ANTIGO, NÃO É MAIS UTILIZADO!!!)
    let
    const -> constant 

*/

/*
Funções: É um trecho de codigo que, so é executado quando chamado
Palavrinha magica para criar funções: function
*/
const formulario = document.querySelector(".formulario");
const mascara = document.querySelector(".maskform");

function cliquenobotao() {
    formulario.style.left = "50%";
    formulario.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible";
}
function esconderForm() {
    formulario.style.left = "-340px";
    formulario.style.transform = "translateX(0)";
    mascara.style.visibility = "hidden";
}