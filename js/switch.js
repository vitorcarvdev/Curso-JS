let dia = new Date().getDay();
console.log(dia);

switch(dia){
    case 0: document.getElementById("faixa-box").innerHTML = "hoje é Domingo";
    break;
    case 1: document.getElementById("faixa-box").innerHTML = "hoje é Segunda";
    break;
    case 2: document.getElementById("faixa-box").innerHTML = "hoje é Terça";
    break;
    case 3: document.getElementById("faixa-box").innerHTML = "hoje é Quarta";
    break;
    case 4: document.getElementById("faixa-box").innerHTML = "hoje é Quinta";
    break;
    case 5: document.getElementById("faixa-box").innerHTML = "hoje é Sexta";
    break;
    case 6: document.getElementById("faixa-box").innerHTML = "hoje é Sábado";
    break;
    default:
        document.getElementById("faixa-box").innerHTML = "Não sei";
}