class Dispositivo {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} ja esta ligada`);
            return;
        }
        this.ligado = true;
        console.log(`${this.nome} ligada`);
    }

    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} ja esta desligada`);
            return;
        }
        this.ligado = false;
        console.log(`${this.nome} desligada`);
    }
}

class Smartphone extends Dispositivo {
    constructor(nome, modelo) {
        super(nome);

        this.modelo = modelo;
    }
}

