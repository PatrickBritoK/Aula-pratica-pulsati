//CODIGO MAIS POLUIDO NAO EXISTE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const aeroporto = require("./aeroporto").aeroporto;
const voo = require("./voo").voo;
const passageiro = require("./passageiro").passageiro;
const fs = require("fs");
const { salvarArquivo, lerArquivo, deletarArquivo } = require("./arquivo");


const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const aeroportolist = [];
const voolist = [];
const passageirolist = [];

const promessas = [];

const menu = function () {
  readline.question(
    "escolher uma opçao:\n 1-Adicionar aeroporto \n 2-Adicionar voo \n 3-Adicionar passageiro a um voo \n 4-listar voos \n 5-sair ",
    (pergunta) => {
      if (pergunta == 1) {
        console.log("TODAS AS PERGUNTAS SÃO DE RESPOSTA OBRIGATORIA!!!!");
        readline.question("Nome do aeroporto? ", (nomeAeroporto) => {
          readline.question(
            "Qual o codigo do aeroporto? ",
            (codigoAeroporto) => {
              readline.question("Qual o endereço? ", (endereco) => {
                aeroportolist.push(nomeAeroporto, codigoAeroporto, endereco);
                console.log("aeroporto criado com sucesso");
                console.log(aeroportolist);
                let Aeroporto = new aeroporto();
                promessas.push(
                  salvarArquivo(
                    "aeroporto.txt",
                    "Cadastro feito com sucesso",
                    Aeroporto.getAeroporto()
                  )
                );
                Promise.all(promessas).then(() =>
                  console.log("\nCadastro feito com sucesso")
                );
                menu();
              });
            }
          );
        });
        //segundo if
      } else if (pergunta == 2) {
        console.log("TODAS AS PERGUNTAS SÃO DE RESPOSTA OBRIGATORIA!!!!");
        readline.question("Qual o codigo do voo? ", (codigoVoo) => {
          readline.question(
            "Qual o codigo do aeroporto origem? ",
            (codigoAeroportoOrigem) => {
              readline.question(
                "Qual o codigo do aeroporto destino? ",
                (codigoAeroportoDestino) => {
                  readline.question(
                    "Qual é o nome da empresa Aérea? ",
                    (nomeDaEmpresa) => {
                      voolist.push(
                        codigoVoo,
                        codigoAeroportoOrigem,
                        codigoAeroportoDestino,
                        nomeDaEmpresa
                      );

                      console.log("Voo adicionado com sucesso");
                      console.log(
                        codigoVoo,
                        codigoAeroportoOrigem,
                        codigoAeroportoDestino,
                        nomeDaEmpresa
                      );

                      let Voo = new voo();
                      promessas.push(
                        salvarArquivo(
                          "voo.txt",
                          "Cadastro feito com sucesso",
                          Voo.getVoo()
                        )
                      );
                      Promise.all(promessas).then(() =>
                        console.log("\nCadastro feito com sucesso")
                      );
                      menu();
                    }
                  );
                }
              );
            }
          );
        });
        //terceiro if
      } else if (pergunta == 3) {
        console.log("TODAS AS PERGUNTAS SÃO DE RESPOSTA OBRIGATORIA!!!!");
        readline.question("Qual o codigo do voo? ", (codigoVoo) => {
          readline.question(
            "Qual é o nome do Passageiro? ",
            (nomePassageiro) => {
              readline.question(
                "Qual o nome do Aeroporto destino? ",
                (destino) => {
                  passageirolist.push(codigoVoo, nomePassageiro, destino);
                  console.log(passageirolist);
                  let Passageiro = new passageiro();
                  promessas.push(
                    salvarArquivo(
                      "passageiro.txt",
                      "Cadastro feito com sucesso",
                      Passageiro.getPassageiro()
                    )
                  );
                  Promise.all(promessas).then(() =>
                    console.log("\nCadastro feito com sucesso")
                  );
                  menu();
                }
              );
            }
          );
        });
        //quarto if
      } else if (pergunta == 4) {
        console.log(
          "codigo do voo: ",
          voolist[0],
          "\nnome do aeroporto: ",
          aeroportolist[0],
          "\nnome do aeroporto destino: ",
          passageirolist[2],
          "\nnome dos passageiros no voo: ",
          passageirolist[1]
        );
      } else if (pergunta == 5) {
        readline.close();
      }
    }
  );
};

menu();

//-------------------------------------------------Metodos "POST","GET","PUT"--------------------------------------------------------

const http = require("http");
const dados = [];
const body = [];

http
  .createServer((req, res) => {
    if (req.method == "POST") {
      if (req.url.indexOf("/aeroporto") >= 0) {
        let body = "";
        req.on("data", function (chunk) {
          body += chunk;
        });
        req.on("end", function () {
          const usuario = JSON.parse(body);
          console.log(usuario);
          res.end("Aeroporto adicionado");
          let dados = new aeroporto();
          promessas.push(
            salvarArquivo("SalvarAeroporto.json", body, dados.getAeroporto())
          );
        });
      } else {
        res.end("Not found");
      }
    } else if (req.method == "GET") {
      if (req.url.indexOf("/aeroporto") >= 0) {
        res.writeHead(200, {
          "Content-Type": "application/json",
        });
        lerArquivo("./SalvarAeroporto.json").then((texto) => {
          res.end(texto);
        });
      }
    } else if (req.method == "PUT") {
      if (req.url.indexOf("/aeroporto") >= 0) {
        let body = "";
        req.on("data", function (chunk) {
          body += chunk;
        });
        req.on("end", function () {
          const usuario = JSON.parse(body);
          console.log(usuario);
          res.end("Aeroporto adicionado");
          let dados = new aeroporto();
          promessas.push(
            salvarArquivo(
              `${aeroporto.nomeAeroporto}.json`,
              "SalvarAeroporto.json",
              body,
              dados.getAeroporto()
            )
          );
          res.writeHead(201, {
            "Content-Type": "application/json",
          });
          res.end(aeroportoJson);
        });
      } else {
        res.end("Not found");
      }
    }  else if (req.method == "DELETE") {
      if (req.url.indexOf("/deletar") >= 0) {
        deletarArquivo(`SalvarAeroporto.json`).then((texto) => {
          res.end(texto);
        });
        res.writeHead(201, {
          "Content-Type": "application/json",
        });
        res.end("Arquivo deletado!");
      }
    }
  })

  .listen(8000, () => console.log("\nServidor inicializado na porta 8000"));
