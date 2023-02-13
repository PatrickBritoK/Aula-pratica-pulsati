//Mensagem de boas vindas

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Qual é seu nome? ', name =>{
    console.log(`Bem vindo, ${name}!`);
    readline.close();
})