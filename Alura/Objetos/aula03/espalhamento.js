const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma",
    telefone: ["11254444", "45899999"]
}

cliente.enderecos = [
 {
    rua: "Estrada do caminho velho",
    numero: 436,
    apartamento: true, 
    complemento: "ap 934" 
 }
]

function ligaParaCliente(telefone, celular) {
    console.log(`Ligando para ${telefone}`)
    console.log(`Ligando para ${celular}`)
}

ligaParaCliente(cliente.telefone[0], cliente.telefone[1])
ligaParaCliente(...cliente.telefone)

// espalhando atributos de um objeto dentro do outro 
const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
}

console.log(encomenda)