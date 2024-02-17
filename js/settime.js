function settime(){
    document.getElementById("status").innerHTML = "Status: Começou a contagem";

    // setTimeout faz a contagem
    setTimeout(function(){
        document.getElementById("status").innerHTML = "Status: Terminou contagem";

        //5000 é iqual a 5 segundos a função acima é ativada quando o contador termina 
    }, 5000);
}

// Existe também: 

// clearTimeout que serve para parar a contagem ao ser ativado um PARAR em outro botao

// setInterval serve para repetir a função a cada intervalo de tempo