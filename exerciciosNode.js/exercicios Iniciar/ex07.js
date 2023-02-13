//saber se o número é primo

const readline1 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline1.question('Informe o numero para saber se é primo?', num1 => {
    let divisores = 0;
    for(let i = 0; i <= num1; i++)
        if(num1 % i == 0)
        divisores++
        if(divisores == 2)
        console.log("primo")
        else
        console.log('NAO PRIMO')

    readline1.close();
  });



  //https://www.javascriptprogressivo.net/2018/12/Verificar-Numero-Primo-Testar-Descobrir.html