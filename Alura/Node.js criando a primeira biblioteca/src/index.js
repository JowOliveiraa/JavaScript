import chalk from "chalk"
import { error } from "console"
import fs from "fs"

function extractLinks(text) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm
    const captures = [...text.matchAll(regex)]
    const results = captures.map(capture => ({[capture[1]]: capture[2]}))
    return results.length !== 0? results : "Não há links no arquivo"
}

function handleError(error) {
    console.log(error)
    throw new Error(chalk.red(error))
}


// usando async/await
async function getFile (args) {
    try {
        const text = await fs.promises.readFile(args, "utf-8")
        return extractLinks(text)
    } catch (error) {
        handleError(error)
    }
}

export default getFile
//getFile("./arquivos/")



// function getFile(path) {
//     const encoding = "utf-8"
//     fs.readFile(path, encoding, (error, text) => {
//         error? handleError(error): console.log(chalk.green(text))
//     })
// }


// usando promisses
// function getFile(path) {
//     fs.promises
//     .readFile(path, "utf-8")
//     .then((text)=> console.log(chalk.green(text)))
//     .catch((error)=> handleError(error))
// }


