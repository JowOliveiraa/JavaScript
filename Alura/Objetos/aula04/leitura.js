// recebendo um json e transformando ele em objeto
const dados = require("./cliente.json")

console.log(dados)

// transformando esse objeto em json
const dadosEmString = JSON.stringify(dados)

console.log(dadosEmString)

// transformando o json em objeto 
const dadosEmObjeto = JSON.parse(dadosEmString)

console.log(dadosEmObjeto)