//Saber se é par ou impar

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite um número: ', num =>{

    if(num%2 == 0){
        console.log("Par");
    } else {
        console.log("impar")
    }
    readline.close();
})