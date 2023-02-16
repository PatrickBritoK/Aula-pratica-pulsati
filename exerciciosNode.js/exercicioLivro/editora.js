class Editora {
  idEditora;
  nome;
  codigoEditora;
  edicao;

  constructor(idEditora, nome, codigoEditora, edicao) {
    this.idEditora = idEditora;
    this.nome = nome;
    this.codigo = codigoEditora;
    this.edicao = edicao;
  }
 // getEditora() {
   // return `${this.id}${this.nome} ${this.codigo} ${this.edicao}`;
  //}
}
exports.Editora = Editora;
