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

for(let chave in cliente) {
    let tipo = typeof cliente[chave]
    if (tipo !== "object" && tipo !== "function") {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
    }
    
}

