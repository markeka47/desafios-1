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
// let diaDaSemana = prompt('Hoje é Sábado ou Domingo?');
// if(diaDaSemana == 'Sábado') {
//   alert('Boa Semana');
// }else {
//   alert('Bom final de Semana!');
// }

// let numero = prompt('Digite um número');
// if(numero < 0) {
//   alert('O número é negativo!');
// } else {
//   alert('O número é positivo!');
// }

// let pontuacaoJogo = prompt('Qual a sua pontuação?');
// if(pontuacaoJogo >= 100) {
//   alert('Parabéns você venceu!');
// }else {
//   alert('Tente novamente para ganhar!');
// }

// let saldoConta = 1000;
// alert(`Seu saldo em conta é: ${saldoConta}`);

// let loginUsuário = prompt('Qual é o seu nome?');
// alert(`Bem Vindo ao Sistema caro ${loginUsuário}`)

// let contadorA = 1;
// while(contadorA < 11) {
//   alert('Contador n°' + contadorA);
//   contadorA++;
// }

// let contadorB = 10;
// while(contadorB >= 0) {
//   alert('Contador n°' + contadorB);
//   contadorB--;
// }

// let contadorC = prompt('Digite um número');

// while(contadorC >= 0) {
//   console.log('Contador regressivo n°' + contadorC);
//   contadorC--;
// }

// let numeroMaximo = prompt("Digite um número para a contagem progregressiva:");
// let contador = 0;

// while (contador <= numeroMaximo) {
//     console.log(contador);
//     contador++
// }

// Desafio final

console.log('Boas vindas!');
let nome = 'Marcos Santos';
console.log(`Olá, ${nome}!`);
alert(`Olá, ${nome}!`)
let linguaGosta = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(`A linguagem favorita é ${linguaGosta}!`);
let valor1 = 15;
let valor2 = 35;
let resultado = valor1 + valor2;
console.log(`A soma do ${valor1} + ${valor2} é igual a ${resultado}.`);

let idade = prompt('Qual a sua idade?');
if(idade >= 18) {
  console.log('Maior de Idade, você já pode beber!');
}else {
  console.log('Menor de idade, vá para casa dormir!');
}

let numero = prompt('Insira um número...');
if(numero >=0) {
  console.log ('Número Positivo!');
}else {
  console.log ('Número Negativo!');
}if (numero == 0) {
  console.log ('Número é igual a Zero!')
}

let contador = 10;
while(contador >= 1) {
  console.log(contador);
  contador--;
}

let nota = prompt('Qual a nota do aluno?');
if (nota >= 7) {
  console.log('Aluno aprovado!');
}else {
  console.log('Aluno reprovado!');
}

let numeroAleatorio = Math.random ();
console.log(numeroAleatorio);

let numeroAleatorio1 = parseInt(Math.random() * 10);
console.log(numeroAleatorio1);

let numeroAleatorio2 = parseInt(Math.random() * 1000);
console.log(numeroAleatorio2);