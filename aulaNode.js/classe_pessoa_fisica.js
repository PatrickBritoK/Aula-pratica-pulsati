let classes = require ('./classe_pessoa_fisica');
console.log(classes.PessoaFisica);

class Usuario extends classes.PessoaFisica{
    imprimir() {
        console.log(this.nome, this.sobrenome);
    }
}

let usuario = new Usuario('Patrick', 'Brito')
usuario.nome = 'Nsei';
usuario.imprimir();