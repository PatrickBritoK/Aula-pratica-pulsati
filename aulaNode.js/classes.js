class PessoaFisica{
    nome = "Patrick";
    sobrenome = "Brito"

    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}


class Usuario extends PessoaFisica{
    _nome = 'Patrick'; //_ serve para deixar a variavel privada.
    sobrenome = 'Brito';

constructor(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

    setNome(nome){
        this.nome = nome;
    }

    imprimir(){
        console.log(this.nome, this.sobrenome);
    }
}
let usuario = new Usuario('Jose', 'Silva').imprimir();
usuario.setNome("Patrick");
usuario.imprimir();
