function carregar() {
    var horaSistema = new Date()
var hora = horaSistema.getHours()
var minutos = horaSistema.getMinutes()

var div = document.getElementById("horario")
var div1 = document.getElementById("mensagem")
var imagem = document.getElementById("imagem")

hora == 1?div1.innerHTML = `Agora são ${hora} hora e ${minutos} minutos`:div1.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`


if (hora >= 5 && hora < 12) {
    div.innerText = "Bom dia!" 
    imagem.src = "/aula12ex/images/modelo1/manha.jpg"   
} else if (hora >= 12 && hora < 19) {
    div.innerText = "Boa tarde!"
    imagem.src = "/aula12ex/modelo1/images/tarde.jpg"
} else {
    div.innerText = "Boa noite!"
    imagem.src = "/aula12ex/modelo1/images/noite.jpg"
}
}
