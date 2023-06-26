import getFile from "./index.js"
import chalk from "chalk"
import fs from "fs"

const argument = process.argv

function print(fileName, result) {
    console.log(chalk.yellow(fileName), result)
}

async function processText(argument) {
    let args = argument[2]

    try {
        fs.lstatSync(args)
    } catch (error) {
        if (error.code === "ENOENT") console.log("arquivo ou diretorio não existente")
        return
    }
    // verificando se o argumento passadoo no terminal é um arquivo ou diretorio
    if (fs.lstatSync(args).isFile()) {
        const result = await getFile(args)
        print(args, result)
    } else if (fs.lstatSync(args).isDirectory()) {
        const directory = await fs.promises.readdir(args)
        directory.forEach(async (file) => {
            const files = await getFile(`${args}/${file}`)
            print(file, files)
        })
        
    }
}

processText(argument)

// o caminho sera chamado no comando do terminal, passando primeiro o arquivo path do arquivo que sera executado e depois o caminho do arquivo ou diretorio que sera lido:
// node src/cli.js ./arquivos/texto.md ou ./arquivos/ 
