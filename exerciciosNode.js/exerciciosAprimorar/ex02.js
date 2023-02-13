const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite uma frase', palavra =>{
    console.log(palavra.split(' '));
    readline.close();
})