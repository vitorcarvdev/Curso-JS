// Basico para pegar a data
let data = new Date();

// Pegar o ano com 4 digitos
let ano = data.getFullYear();

// Pegar o mes atual no formato numero de 0 a 11 sendo 0 janeiro
let mes = data.getMonth();

// Para pegar o mês no formato escrito é nessario fazer um array
let nomeMes = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
let mesEscrito = nomeMes[data.getMonth()]

// Pegar dia do mes - de 1 a 31
let diaMes = data.getDay();

// Para pegar nme do dia cria-se outro array como no caso do mês
let nomeDia = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];
let mdiaEscrito = nomeDia[data.getDay()];

// Pegando a Hora
let hoje = data.getHours();

// Pegando a Minutos
let minutos = data.getMinutes();

// Pegar no padrão Brasileiro (Data e hora)
let PadraoBR = data.toLocaleDateString('pt-BR');

// Pegar no padrão Brasileiro (Apenas Data)
let DPadraoBR = data.toLocaleDateString('pt-BR', {dateStyle: 'short' });

// Pegar no padrão Brasileiro (Apenas Hora)
let HPadraoBR = data.toLocaleString('pt-BR', {timeStyle: 'short' });

// Ou pegando todas as variaveis
let DataQuebrada = diaMes + "/" + mes + "/" + ano;
console.log(DataQuebrada);