// Entendo o conceito básico
const carro = {
    marca: "Jeep ",
    modelo: "Renegade ",
    ano: 2015,

    carroCompleto: function(){
        return "O Carro é um " + this.marca + this.modelo + "fabricado em " + this.ano;
    }
};

// chamando objet
console.log(carro.marca);

// Chamando a funcao dentro do objeto
console.log(carro.carroCompleto());
