class Autor {
  idAutor;
  nome;
  codigo;

  constructor(idAutor, nome, codigo) {
    this.idAutor = idAutor;
    this.nome = nome;
    this.codigo = codigo;
  }
  getAutor() {
    return `${this.idAutor} ${this.nome} ${this.codigo}`;
  }
}
exports.Autor = Autor;
