const readline = require('readline').createInterface({
    imput: process.stdin,
    output: process.stdout
});

readline.question('Who are you?', name =>{
    console.log(`Hey there ${name}!`);
    readline.close();
})