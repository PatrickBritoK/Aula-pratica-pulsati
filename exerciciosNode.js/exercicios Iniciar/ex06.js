//Fazer tabuada

const readline1 = require('readline').createInterface(
    {
    input: process.stdin,
    output: process.stdout
  }
  );
  
  readline1.question('Informe o primero numero para saber sua tabuada: ', num1 => {
    for(let s = 1; s <= 10;s++){
        console.log(num1 + 'x' + s + "=" + (num1 * s));
    }
      readline1.close();
  })
  ;