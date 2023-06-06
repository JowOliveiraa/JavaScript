const pessoa = {
    nome: "Luma",
    profissao: "Engenheira"
}

console.log(pessoa)

// é possivel adicionar uma propriedade a um objeto mesmo depois que ele ja tenha sido criado
pessoa.telefone = "111123"
console.log(pessoa)

// deletando uma propriedade de um objeto
delete pessoa.telefone
console.log(pessoa)

// obs. por ser uma constante, eu posso alterar propriedades do objeto, mas não posso atribuir outro objeto a ele diretamente