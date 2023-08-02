class Carro {
    constructor(nome) {
        this.nome = nome;
        this._velocidade = 0;
    }

    get velocidade() {
        return this._velocidade;
    }

    set velocidade(valor) {
        if (typeof valor !== 'number') return;
        if (valor < 0 || valor > 100) return;
        this._velocidade = valor;
    }

    acelerar() {
        if (this._velocidade >= 100) return;
        this._velocidade++;
    }

    freiar() {
        if (this._velocidade <= 0) return;
        this._velocidade--;
    }
}

const c1 = new Carro("fusca");
console.log(c1.velocidade);
c1.velocidade = 10; 
console.log(c1.velocidade);
c1.velocidade = 150; 
console.log(c1.velocidade);
