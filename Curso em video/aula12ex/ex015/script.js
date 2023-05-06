function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    
    var inputNascimento = document.getElementById("nascimento")
    nascimento = Number(inputNascimento.value)
    var resultado = document.getElementById("resultado")
    var sexo = document.getElementsByName("sexo")
    var genero = ""
    var faseVida = ""
    var idade = ano - nascimento

    //verificando qual checkbox foi marcada usando o operador ternario
    sexo[0].checked? genero = "homem": genero = "mulher"
    //verificando em qual fase da vida a pessoa esta
    if (idade >= 0 && idade < 11) faseVida = "criança"
    if (idade >= 11 && idade < 21) faseVida = "jovem"
    if (idade >= 21 && idade < 60) faseVida = "adulto"
    if (idade >= 60) faseVida = "idoso"

    //criando um elemento HTML com js
    var imagem = document.createElement("img")
    imagem.setAttribute("src", `/aula12ex/ex015/images/${genero}-${faseVida}.jpg`)

    if (nascimento <= 0 || nascimento > ano) {
        alert("Verifique os dados e tente novamente!")
    } else {
        resultado.style.textAlign = "center"
        resultado.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        //como o elemento foi criado depois, é preciso usar o appendChild para ele aparecer
        resultado.appendChild(imagem)
    }
    
    
}