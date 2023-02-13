//Raiz quadrada de um número

const readline1 = require('readline').createInterface(
    {
    input: process.stdin,
    output: process.stdout
  }
  );
  
  readline1.question('Informe o número:?', num1 => {
    console.log(`A raiz quadrada de ${num1} é: `,Math.sqrt(num1))
      readline1.close();
  });