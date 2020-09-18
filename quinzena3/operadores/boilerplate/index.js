console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

/* 1) false
      false
      true
      boolean
*/

/* 2) não está definido
      null
      11
      3
      3,19,5,6,7,8,9,10,11,12
      6
*/

/* 1 Escrita de código
const user = Number(prompt(" Qual é a sua idade?" ));
const amigo = Number(prompt(" Quantos anos tem seu melhor amigo ou amiga?" ));

const idadesIguais = user == amigo;
const idadeMaior = user > amigo;
const idadeMenor = user < amigo;

user == amigo == false;
user > amigo == true;
user < amigo == false;

let resultado = user > amigo;

console.log("Sua idade é maior do que a do seu melhor amigo?", resultado );
*/

/* 2  
const par = Number(prompt("Digite um número que seja par: "));

let resultado = par%2 == 0;
let naoresultado = par%2 != 0;

console.log("Ok, esse número é par", resultado);
console.log("Vish, isso não é um número par", naoresultado);
*/

/* 3
let listaDeTarefas = [];

listaDeTarefas.push(prompt("Digite uma tarefa de sua lista:"));
listaDeTarefas.push(prompt("Digite outra tarefa de sua lista:"));
listaDeTarefas.push(prompt("Digite mais uma tarefa de sua lista:"));

console.log(listaDeTarefas);


listaDeTarefas.splice(Number(prompt("índice:")), 1)

console.log(listaDeTarefas);
*/

const emailDoUsuario = String(prompt("Digite seu e-mail: "));
const nomeDoUsuario = String(prompt("Digite seu nome: "));

console.log("O e-mail " + emailDoUsuario + " " + "foi cadastrado com sucesso." + " " + "Seja bem-vinda(o), " + nomeDoUsuario);




