const { autor } = require("./autor");
const { editora, Editora } = require("./editora");
const { livro } = require("./livro");
const salvarArquivo = require("./promisses").salvarArquivo;
const lerArquivo = require("./promisses").lerArquivo;

const atendimentoBiblioteca = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

editoraList = [];
autorList = [];
livroList = [];

const atendimentoMenu = function () {
  atendimentoBiblioteca.question(
    "1-Adicionar editora \n 2-Adicionar autor \n 3-Adicionar livro \n 4-Listar livros \n 0-Parar o atendimento: ",
    function (escolha) {
      if (escolha == 1) {
        opcaoEditora();
      } else if (escolha == 2) {
        opcaoAutor();
      } else if (escolha == 3) {
        opcaoLivro();
      } else if (escolha == 4) {
        opcaoListar();
      } else if (escolha == 0) {
        console.log("Encerrando atendimento...");
        atendimentoBiblioteca.close();
      } else {
        console.log("Opção inválida");
        atendimentoMenu();
      }
    }
  );
};
atendimentoMenu();

const opcaoEditora = () => {
  atendimentoBiblioteca.question("Informe o id: ", (idEditora) => {
    atendimentoBiblioteca.question(
      "Informe o nome da editora: ",
      (nomeEditora) => {
        atendimentoBiblioteca.question(
          "Informe o codigo da editora : ",
          (codigoEditora) => {
            atendimentoBiblioteca.question("Informe a edição: ", (edicao) => {
              const editoraA = new Editora(
                idEditora,
                nomeEditora,
                codigoEditora,
                edicao
              );
              const editoraB = JSON.stringify(editoraA);
              editoraList.push(editoraA);
              salvarArquivo(`${editoraA.idEditora}.json`, editoraB).then(() => {
                lerArquivo(`${editoraA.idEditora}.json`).then((texto) => {
                  console.log(JSON.parse(texto));
                });
              });
              console.log(`>>>>>>>>>>Editora criada com sucesso<<<<<<<<<<`);
              console.log(editoraList);
              atendimentoMenu();
            });
          }
        );
      }
    );
  });
};

const opcaoAutor = () => {
  atendimentoBiblioteca.question("Informe o id: ", (idAutor) => {
    atendimentoBiblioteca.question("Informe o nome do autor: ", (nomeAutor) => {
      atendimentoBiblioteca.question(
        "Informe o codigo do autor",
        (codigoAutor) => {
          const autorA = new Autor(idAutor, nomeAutor, codigoAutor);
          const autorB = JSON.stringify(autorA);
          autorList.push(autorA);
          salvarArquivo(`${autorA.idAutor}.json`, autorB).then(() => {
            lerArquivo(`${autorA.idAutor}.json`).then((texto) => {
              console.log(JSON.parse(texto));
            });
          });
        }
      );
      console.log(`>>>>>>>>>>Autor criado com sucesso<<<<<<<<<<`);
      console.log(autorList);
      atendimentoMenu();
    });
  });
};

const opcaoLivro = () => {
  atendimentoBiblioteca.question("Informe o id", (idLivro) => {
    atendimentoBiblioteca.question(
      "Informe o codigo do autor",
      (codigoAutor) => {
        atendimentoBiblioteca.question(
          "Informe o codigo do codigoLivro",
          (codigoLivro) => {
            const livroA = new Livro(idLivro, codigoAutor, codigoLivro);
            const livroB = JSON.stringify(livroA);
            livroList.push(livroA);
            salvarArquivo(`${livroA.idLivro}.json`, livroB).then(() => {
              lerArquivo(`${livroA.idLivro}.json`).then((texto) => {
                consolee.log(JSON.parse(texto));
              });
            });
            console.log(`>>>>>>>>>>Livro criado com sucesso<<<<<<<<<<`);
            console.log(livroList);
            atendimentoMenu();
          }
        );
      }
    );
  });
};
