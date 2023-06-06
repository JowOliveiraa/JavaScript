const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma",
    telfone: ["11254444", "45899999"],
    saldo: 200,
    efetuaPagamento: function(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente")
        } else {
            this.saldo -= valor
            console.log(`Compra realizada com sucesso. Saldo atual: ${this.saldo}`)
        }
    }
}
cliente.efetuaPagamento(100)