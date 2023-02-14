const { rejects } = require('assert');
const fs = require('fs');

exports.salvarArquivo = (nomeArquivo, texto) =>{
    const promessa = new Promise((resolve,reject) => {
        setTimeout(() => {
            fs.writeFile(nomeArquivo, texto, (erro) => {
                if (erro) {
                    reject(erro);
                } else {
                    resolve();
                }
            });
        }), Math.random(3);
    });
    return promessa
}