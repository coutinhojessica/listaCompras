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

function numeroInt(valor) {
  return Number.parseInt(valor, 10);
}

function validarQuantidade(input, quantidadeErro){
  let msgErro = document.querySelector('.quantidadeErro');
  let numero = numeroInt(input.value);
  if(input.value.trim() === ""){
    input.style.borderColor = 'red';
    msgErro.innerText = "Campo obrigatório!";
    return false;
  }
  if(isNaN(numero)){
    input.style.borderColor = 'red';
    msgErro.innerText = "Valor informado é inválido!";
    return false;
  }
  input.style.borderColor = 'black';
  msgErro.innerText = "";
  return true;
}

function pontoNumeroFloat(valor){
  return Number.parseFloat(valor.replace(",", "."));
}

function validarPreco(input, precoErro){
  let msgErro = document.querySelector('.precoErro');
  let numero = pontoNumeroFloat(input.value);
  if(input.value.trim() === ""){
    input.style.borderColor = 'red';
    msgErro.innerText = "Campo obrigatório!";
    return false;
  }
  if(isNaN(numero)){
    input.style.borderColor = 'red';
    msgErro.innerText = "Valor informado é inválido!";
    return false;
  }
  input.style.borderColor = 'black';
  msgErro.innerText = "";
  return true;
}




