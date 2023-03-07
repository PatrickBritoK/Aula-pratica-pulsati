document.getElementById("button").addEventListener("click", removerElemento);

      function removerElemento() {
        const elementoRemovido = document.getElementById("texto");
        elementoRemovido.remove();
      }