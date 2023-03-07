document.getElementById("button").addEventListener("click", function() {
    const novoElemento = document.createElement("p");
    novoElemento.textContent = "Novo elemento adicionado à página!";
    document.body.appendChild(novoElemento);
  });