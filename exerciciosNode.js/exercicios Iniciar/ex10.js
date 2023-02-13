//Número fatorial

const readline1 = require('readline').createInterface(
    {
    input: process.stdin,
    output: process.stdout
  }
  );
  
  readline1.question('Informe o número: ', num1 => {
    function factorialize(num1) {
        if (num1 === 0 || num1 === 1)
          return 1;
        for (var i = num1 - 1; i >= 1; i--) {
          num1 *= i;
        }
        return console.log(num1);
      }
      factorialize(num1);
      readline1.close();
  });