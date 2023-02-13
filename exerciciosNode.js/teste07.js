const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite uma palavra', palavra =>{
  if (new Set(palavra).size > 1)
  console.log("As letras não são iguais")
else 
  console.log("As letras são iguais")
  readline.close();
})