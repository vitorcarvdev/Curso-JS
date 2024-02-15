let idade = 16;

//verifica se é versadeiro ou falso sem uso de if/else
let eleitor = (idade < 16) ? "Não pode votar" : "Pode Votar";

// O funcionamento seria também...
(idade > 16 || idade < 70) // é true, qualquer coisa diferente disso é false 

alert(eleitor);