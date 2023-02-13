/*let numbers = "11111121111";
let palavra = "aaaaaaaaaabaaaa";

if (new Set(numbers).size > 1) console.log("Todos os valores não são iguais");
else console.log("Todos os valores são iguais");

if (new Set(palavra).size > 1) console.log("As letras não são iguais");
else console.log("As letras são iguais");*/

const readline1 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let ListaDeNomes = [];

const ChamarAReadLine = function () {
  readline1.question(
    "Informe um nome (Para sair informe 'sair'): ",
    function (answer) {
      if (answer == "sair") {
        ListaDeNomes.sort();
        console.log(ListaDeNomes);
        return readline1.close();
      }
      console.log('Você informou: "', answer, '"');
      ListaDeNomes.push(answer);
      ChamarAReadLine();
    }
  );
};
ChamarAReadLine();
