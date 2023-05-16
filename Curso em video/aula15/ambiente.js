let numero = [5, 8, 2]
console.log(`Nosso array é ${numero}`)

//o push() acrescenta um elemento na ultima posição do array
numero.push(1)
console.log(`Nosso array é ${numero}`)
//o length mostra o tamanho do array
console.log(`O array tem ${numero.length} posições`)

for(var i = 0; i < numero.length; i++) {
    console.log(`a posição ${i} do array é ${numero[i]}`)
}
console.log("---------------------------------------------")

for (var i in numero) {
    console.log(`a posição ${i} do array é ${numero[i]}`)
}

console.log("---------------------------------------------")

//o indexOf() pesquisa por um elemento dentro do array e retorna a posição dele, se o elemento não for encontrado ele  retorna -1
console.log(numero.indexOf(5))