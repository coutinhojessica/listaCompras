function validarProduto(elemento) {
  let msgErro = document.querySelector('.produtoErro');
  let valor = elemento.value;
  const regex = /^[a-zÀ-Ú\s]*$/i;
  
    if (valor.trim() === '') {
        elemento.style.borderColor = 'red';
        msgErro.innerText = "Campo obrigatório!";
    }else if(!regex.test(valor)){
      elemento.style.borderColor = 'red';
      msgErro.innerText = "Campo inválido! Não é permitido números neste campo.";
    }else{
      msgErro.innerText = "";
      elemento.style.borderColor = 'black';
        return valor;
    }
}

function validarCategoria(elemento) {
  let msgErro = document.querySelector('.categoriaErro');
  let valor = elemento.value;
  const regex = /^[a-zÀ-Ú\s]*$/i;
  
    if (valor.trim() === '') {
        elemento.style.borderColor = 'red';
        msgErro.innerText = "Campo obrigatório!";
    }else if(!regex.test(valor)){
      elemento.style.borderColor = 'red';
      msgErro.innerText = "Campo inválido! Não é permitido números neste campo.";
    }else{
      msgErro.innerText = "";
      elemento.style.borderColor = 'black';
        return valor;
    }
}

