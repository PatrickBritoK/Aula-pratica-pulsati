function calcular() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let operacao = document.getElementById("operacao").value;
  let res = 0;
  if (operacao == "-") {
    res = num1 - num2;
  } else if (operacao == "+") {
    res = num1 + num2;
  } else if (operacao == "*") {
    res = num1 * num2;
  } else if (operacao == "/") {
    res = num1 / num2;
  }
let resultado = document.querySelector('#resultado');
resultado.innerHTML = `O resultado é ${res}`;
}
