const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "12345678900",
    email: "andre@gmail"
}

console.log(`O nome do cliente é ${cliente["nome"]}`)
// o .substring() serve para acessar caracteres, usando como argumento a posição do primeiro caractere a quantidade de caracteres
console.log(`Os 3 primeiros digitos do CPF dele são ${cliente.cpf.substring(0,3)}`)
