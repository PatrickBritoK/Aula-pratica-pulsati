const array = [7, 7, 7];
let soma = 0;

for(let i = 0;i < array.length;i++){
    (soma += array[i]) / 3;
}
console.log(soma / 3)