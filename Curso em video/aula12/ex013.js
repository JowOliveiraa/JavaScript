var data = new Date()
var hoje = data.getDay()

var dia

switch (hoje) {
    case 0:
        dia = "Domingo"
        break
    case 1:
        dia = "Segunda"
        break
    case 2:
        dia = "Terça"
        break
    case 3:
        dia = "Quarta"
        break        
    case 4:
        dia = "Quinta"
        break
    case 5:
        dia = "Sexta"
        break
    case 6:
        dia = "Sabado"
        break        
    default:
        dia = " uma data invalida"
        break
}
console.log(`Hoje é ${dia}`)
