# 🛒 Lista de Compras — JavaScript

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/coutinhojessica)

---

## 📌 Descrição curta
Aplicação em desenvolvimento para gerenciamento de lista de compras, utilizando **JavaScript puro**, com foco em lógica, manipulação de arrays de objetos e atualização dinâmica do DOM.

---

## 🚧 Status do Projeto
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow?style=for-the-badge) 
O foco atual é a implementação da lógica JavaScript antes de melhorias visuais e persistência de dados.

---

## 🎯 Objetivo do Projeto
Este projeto foi criado para praticar e consolidar conceitos fundamentais de JavaScript, como:

- Manipulação de arrays de objetos  
- Captura de dados via formulário  
- Estruturas de repetição  
- Cálculos matemáticos  
- Atualização dinâmica da interface  

---

## 🧩 Estrutura dos Dados

Cada item da lista é representado por um objeto com a seguinte estrutura:

- **Nome do Produto** (string)  
- **Categoria** (Alimentos, Limpeza, Higiene ou Bebidas)  
- **Quantidade** (number inteiro)  
- **Preço Unitário** (number decimal)  

### Exemplo do array de objetos:

```js
const listaCompras = [
  { id: 1, nome: "Café", categoria: "Alimentos", quantidade: 2, preco: 15.50 },
  { id: 2, nome: "Sabão em Pó", categoria: "Limpeza", quantidade: 1, preco: 22.90 }
];