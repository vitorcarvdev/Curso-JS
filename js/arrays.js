// dentro dos arrays tambem é possivel colocar (Variaveis, objetos, e outros)

// forma mais comum de fazer
const listaCompras = ["Arroz","Feijão","Macarrão","Leite"];

// imprimindo
listaCompras[0]; // arroz ou
console.log(listaCompras); // mostra todos os itens do array

// Outra forma de criar este mesmo Array
const ListaCompras2 = new Array("Arroz","Feijão","Macarrão","Leite");

// passa tudo do array para dentro da div com id faixa-box-array
document.getElementById("faixa-box-array").innerHTML = listaCompras;