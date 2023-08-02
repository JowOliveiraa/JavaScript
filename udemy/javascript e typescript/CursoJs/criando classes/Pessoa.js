class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(`${this.nome} esta falando`)
    }
}

const p1 = new Pessoa("João", "Da silva")
p1.falar()