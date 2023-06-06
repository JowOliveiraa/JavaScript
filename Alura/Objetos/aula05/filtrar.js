const clientes = require("./clientes.json")

function filtrarApSemComplemento(lista) {
    return lista.filter((cliente) => {
        // hasOwnProperty verifica se existe uma determinada propriedade em um objeto
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"))
    })
}

const filtrados = filtrarApSemComplemento(clientes)

console.log(filtrados)