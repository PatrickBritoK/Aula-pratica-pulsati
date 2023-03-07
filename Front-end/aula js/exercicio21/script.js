const trocarBotao = document.getElementById("botao");

trocarBotao.addEventListener("click", function() {
  this.setAttribute("disabled", true);
});
