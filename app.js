// // Desafio 1
// alert('Boas vindas ao nosso site!');
// let = 'Lua';
// let idade = prompt('Qual é a sua idade?');
// let numeroDeVendas = 50;
// let saldoDisponivel = 1000;
// alert('Erro! Preencha todos os campos');
// let mensagemDeErro = 'Erro! Preencha todos os campos';
// alert(mensagemDeErro);
// let nome = prompt('Qual é o nome do usuário?');

// if(idade >=18) {
//   alert('Pode tirar habilitação!');
// }

// Desafio 2
let diaDaSemana = prompt('Hoje é Sábado ou Domingo?');
if(diaDaSemana == 'Sábado') {
  alert('Boa Semana');
}else {
  alert('Bom final de Semana!');
}

let numero = prompt('Digite um número');
if(numero < 0) {
  alert('O número é negativo!');
} else {
  alert('O número é positivo!');
}

let pontuacaoJogo = prompt('Qual a sua pontuação?');
if(pontuacaoJogo >= 100) {
  alert('Parabéns você venceu!');
}else {
  alert('Tente novamente para ganhar!');
}

let saldoConta = 1000;
alert(`Seu saldo em conta é: ${saldoConta}`);

let loginUsuário = prompt('Qual é o seu nome?');
alert(`Bem Vindo ao Sistema caro ${loginUsuário}`)

let contadorA = 1;
while(contadorA < 11) {
  alert('Contador n°' + contadorA);
  contadorA++;
}

let contadorB = 10;
while(contadorB >= 0) {
  alert('Contador n°' + contadorB);
  contadorB--;
}

let contadorC = prompt('Digite um número');

while(contadorC >= 0) {
  console.log('Contador regressivo n°' + contadorC);
  contadorC--;
}

let numeroMaximo = prompt("Digite um número para a contagem progregressiva:");
let contador = 0;

while (contador <= numeroMaximo) {
    console.log(contador);
    contador++
}