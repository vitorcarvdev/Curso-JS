/*

De forma simples o JSON converte o objeto para texto e texto para objeto, este tipo de conversao é aceita pela maioria dos sistemas.

JSON.stringify() -> converte objetos em texto padrão JSON
JSON.parse() -> converte texto no padrâo JSON em objetos


*/

// exemplo de objeto
const carro = {
    marca: "Jeep ",
    modelo: "Renegade ",
    ano: "2016 ",
    motor: ["1.3","2.0","2.0 Diesel 4x4"], // Pode-see criar array dentro do objeto
}

// convertendo objeto para texto
let dados = JSON.stringify(carro);

// mostra todos os dados do objeto
document.getElementById("dadosCarro").innerHTML = dados;

// convertendo o texto para objeto, assim posso pegar dados quebrados
let OBJcarro = JSON.parse(dados);

// traz apenas o modelo e motor de nosso objeto
document.getElementById("dadosCarro").innerHTML = OBJcarro.modelo + OBJcarro.motor[2];


