const meuBotao = document.querySelector("#meuBotao");

meuBotao.addEventListener("click", () => {
  const meuTitulo = document.querySelector("#meuTitulo");
  meuTitulo.textContent = "Novo titulo teste";
});
