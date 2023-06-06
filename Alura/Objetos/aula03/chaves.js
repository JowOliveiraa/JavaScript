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

const chavesDoObjeto = Object.keys(cliente)

console.log(chavesDoObjeto)

if (!chavesDoObjeto.includes("enderecos")) console.error("Erro. É necessario ter um endereço cadastrado.")