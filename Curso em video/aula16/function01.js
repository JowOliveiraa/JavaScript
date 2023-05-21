function parOuImpar(numero) {
    var resultado = ""
    numero % 2 == 0? resultado = "par": resultado = " impar"
    console.log(resultado)
}
parOuImpar(10)
