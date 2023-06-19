const user = {
    
    nome: "Juliana",
    email: "j@j",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: true,

    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

user.exibirInfos()

const admin = {
    
    nome: "Mariana", 
    email: "m@m",
    nascimento: "2021/01/02",
    role: "admin",
    ativo: true,

    criarCursos: function() {
        console.log("Curso Criado!")
    }
}

// Object.setPrototypeOf recebe um objeto no primeiro paremetro para herdar os metodos e atributos do objeto no segundo parametro
Object.setPrototypeOf(admin, user)
admin.criarCursos()
admin.exibirInfos()