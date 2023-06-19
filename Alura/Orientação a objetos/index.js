import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User("Mariana", "m@m", "2020-01-01")
console.log(novoUser.exibirInfos())

const novoAdmin = new Admin("Rodrigo", "r@r", "2020-02-02")
console.log(novoAdmin.nome)
novoAdmin.nome = "Rodrigo novo"
console.log(novoAdmin.nome)