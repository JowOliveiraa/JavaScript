function User(nome, email) {
    this.nome = nome
    this.email = email

    this.exibirInfos = function() {
        return `${this.nome}, ${this.email}`
    }
} 

const novoUser = new User ("Juliana", "j@j")

console.log(novoUser.exibirInfos())

function Admin(role) {
    User.call(this, "Juliana", "j@j")
    this.role = role || "estudante"
}

Admin.prototype = Object.create(User.prototype)
const userDois = new Admin("admin")
console.log(userDois.exibirInfos())
console.log(userDois.role) 
