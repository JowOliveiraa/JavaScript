function gerar() {
    var numeroInput = document.getElementById("numero")
    var numero = Number(numeroInput.value)
    var resultado = document.getElementById("resultado")
    var tabuada = document.createElement("p")

    if (numero <= 0) {
        alert("insira um numero maior do que 0")
    } else {
        resultado.innerHTML = `A tabuada de ${numero} é:`
        resultado.appendChild(tabuada)

        for (var contador = 1; contador <= 10; contador++) {
            tabuada.innerHTML += `${numero} x ${contador} = ${numero * contador} <br>`     
        }    
    }
     

    
}



