//Somar números

const readline1 = require('readline').createInterface(
  {
  input: process.stdin,
  output: process.stdout
}
);

readline1.question('Informe o primero numero:?', num1 => {
  readline1.question('Informe o segundo numero:?', num2 => {
  console.log('A soma dos número é: ',parseInt( num1)+parseInt(num2));
    readline1.close();
})
});