function contar() {
    var contadorInput = document.getElementById("contador")
    var contador = Number(contadorInput.value)
    var numeradorInput = document.getElementById("numerador")
    var numerador = Number(numeradorInput.value)
    var incrementadorInput = document.getElementById("incrementador")
    var incrementador = Number(incrementadorInput.value)
    var resultado = document.getElementById("resultado")

    var contagem = document.createElement("p")

    if (contador > 0 && numerador > 0 && incrementador > 0) {
        resultado.innerHTML = "Contando:"
        resultado.appendChild(contagem)
        
        //Validando os numeros para saber se a contagem vai ser crescente ou descendente
        if (contador < numerador) {
            for(var contador; contador <= numerador; contador += incrementador) {
                contagem.innerHTML += ` ${contador} \u{1F449}` // o \u{} serve para colocar emojis
            }           
        } else {
            for (var contador; contador >= numerador; contador -= incrementador) {
                contagem.innerHTML += ` ${contador} \u{1F449}`
            }
        }
        
        contagem.innerHTML += `\u{1F3C1}`

    } else {
        alert("reveja os numeros, todos os campos são obrigatorios!")
         
    }

    
    
    


    






    
     
}