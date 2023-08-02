function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
    // return new Promise cria a promessa, só com uma promessa eu posso usar o async/await
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(msg);
            resolve(); // Resolvemos a Promise após o tempo especificado
        }, tempo);
    });
}

async function executa() {
    const fase1 = await espera("Frase 1", rand(1, 3));

    const fase2 = await espera("Frase 2", rand(1, 3));

    const fase3 = await espera("Frase 3", rand(1, 3));
}

executa();