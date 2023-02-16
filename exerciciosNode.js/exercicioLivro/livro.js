class Livro {
  idLivro;
  codigoAutor;
  codigoLivro;

  constructor(idLivro, codigoAutor, codigoLivro) {
    this.idLivro = idLivro;
    this.codigoAutor = codigoAutor;
    this.codigoLivro = codigoLivro;
  }
  getLivro() {
    return `${this.idLivro}${this.codigoAutor} ${this.codigoLivro}`;
  }
}
exports.Livro = Livro;
