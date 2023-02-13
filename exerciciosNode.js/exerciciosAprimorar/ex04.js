const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite uma palavra: ', palavra =>{
    let array = []
    array.push(palavra);
    array.reverse();
    console.log(array);
    readline.close();
})

//VE DEPOIS
