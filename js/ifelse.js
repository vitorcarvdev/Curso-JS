/*

De forma direta

let interruptor  = "stand";

if(interruptor == "on"){
    print("Lampada Ligada");
} if (interruptor == "stand"){
    print("Lampada em Satandby");
} else {
    print("Lampada Desligada");
}


*/


function enviarForm(){

    // pega os dados do campo nome no form
    let nome = document.getElementById("nome").value;

    if(nome == "" || nome == null){
        let error = document.getElementById("error");
        error.innerHTML = "Preencha o nome";
        error.style.color = "red";
    } else{
        let error = document.getElementById("error");
        error.innerHTML = "enviado corretamente";
        error.style.color = "green";
    }
}