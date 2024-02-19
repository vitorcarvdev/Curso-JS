/*

JSON.stringify() -> converte objetos em texto padrão JSON
JSON.parse() -> converte texto no padrâo JSON em objetos

*/
function consultarCEP(){
    let cepIns = document.getElementById("cep").value;
    
    const ajax = new XMLHttpRequest();
    ajax.open("GET","https://viacep.com.br/ws/" + cepIns + "/json/");
    ajax.send();

    ajax.onload = function(){
        // VIA CEP manda o arquivo no formato texto transforma texto em objeto JSON
        let cepOBJ = JSON.parse(this.responseText);

        // Quebrando os objetos
        document.getElementById("dadosCEP").innerHTML = 
        cepOBJ.logradouro + "<br>" + 
        cepOBJ.bairro + "<br>" +
        cepOBJ.cep + "<br>" +
        cepOBJ.localidade + " - " + cepOBJ.uf;
    }
}