//quantas letras e palavras em um texto.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite uma palavra ', palavra =>{
    console.log(`O numero de letras na palavra é: `, palavra.length);
    console.log(`O numero de palavras é : `, palavra.split(' ').length);
    readline.close();
})