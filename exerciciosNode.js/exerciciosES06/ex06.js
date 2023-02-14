function valor(...valores){
    console.log(valores * 0.08)
}
valor(784)

const readline1 = require('readline').createInterface(
    {
    input: process.stdin,
    output: process.stdout
  }
  );
  
  readline1.question('Informe o valor: ', num1 => {
    readline1.question('Informe o juros: ', num2 => {
    let porcentagem = num2 /100;
    let juros = num1 * num2;
    console.log(`O valor ${num1} com juros de ${num2}% ao mês fica no valor de ${juros}`)  //Só não consigo colocar virgula no meio da conta final.
      readline1.close();
  })
  });