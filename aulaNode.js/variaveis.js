var teste1 = 'teste1';
let teste2 = 'teste2';
const teste3 = 'teste3';

console.log(teste1)
console.log(teste2)
console.log(teste3)

let a = "1";
let b = 1;
let c = function() { console.log('a')}

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(a + a);
console.log(b + b);

console.log('--------------------------------------------------')

console.log(a == a);
console.log(b == b);
console.log(a == b); //comparar para saber se o valor/texto é igual.
console.log(a === b);  //comparar para saber se é totalmente igual.
console.log(a !== b); //saber se é diferente, tanto no tipo e no 'texto'.
console.log(a && b); //saber se os dois valores é true.

console.log('--------------------------------------------------')


console.log(!!a);
console.log(!a);
console.log(a == null || a == undefined)
console.log(a == undefined)

console.log('--------------------------------------------------')

function teste19(){ //function é uma "caixinha".
    console.log('function 1');
    let a = 'novo a' //se tirar o Let vira uma variavel global e não só da "caixinha".
    console.log(a);
    console.log(b);
}

let teste20 = function(){
    console.log('function 2')
}

teste19();
teste20();

console.log('--------------------------------------------------')

let e = 'e';
let obj = {a: 1,b: 2};
obj['c'] = 3;
obj.d = 4;
obj[e] = 5;
console.log(obj);

console.log('--------------------------------------------------')

function novoUsuario(nome, idade){
    return{
        dados: {
            nome: nome, 
            idade: idade
        },
        setNome: function(novoNome){
            if (!novoNome){
            this.dados.nome = novoNome;
            }
        }
    }
}

const u = novoUsuario('Patrick', 19);
console.log(u);
u.setNome('José');
console.log(u);

console.log('--------------------------------------------------')

