class Carro{
    constructor(Vmarca,Vmodelo,Vano){
        this.marca = Vmarca;
        this.modelo = Vmodelo;
        this.ano = Vano;
    }

    //objeto do carro
    alarme(){
        return this.modelo + " esta com alarme Instalado";
    }
}

const uno = new Carro("Fiat","Uno","2018");
const civic = new Carro("Honda","civic","2015");

//Chamando a class e o objeto dentro dela
console.log(civic.alarme());