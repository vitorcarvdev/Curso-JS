/*
Aprendendo sobre laço com for

// loop imprimindo de 0 a 10
for (let i = 0; i < 10; i++){
    document.getElementById("faixa-box").innerHTML += i;
}

*/

// Colocando um campo select com data de nascimento de 1970 a 2010
for (let i = 2011; i >= 1970; i--){
    document.getElementById("ano-nasc").innerHTML += "<option>" + i + "</option>";
}