const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma",
    telfone: ["11254444", "45899999"]
}

cliente.enderecos = [
 {
    rua: "Estrada do caminho velho",
    numero: 436,
    apartamento: true,
    complemento: "ap 934"
 }
]

console.log(cliente.enderecos)

// o .push insere um objketo novo no array
cliente.enderecos.push(
    {
        rua: "Viela Indaiatuba",
        numero: 46,
        apartamento: false,
        complemento: ""
    }
)

console.log("---------------------------")
console.log(cliente.enderecos)


// o filter() faz uma filtragem dentro de um array conforme o parametro que passamos para ele
const listaApartamentos = cliente.enderecos.filter(
    //cria uma var para receber cada objeto dentro do array e filtra qual tem determinado valor
    (endereco) => endereco.apartamento === true
)
console.log("---------------------------")
console.log(listaApartamentos)