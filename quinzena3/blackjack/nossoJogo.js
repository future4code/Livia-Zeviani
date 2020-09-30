/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */



console.log("Bem vindo ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {
  console.log("Vamos jogar") 
}else {
  console.log("Ok, quem sabe outra vez")
}


  

const cartasUser = [comprarCarta(), comprarCarta()];

valorUser = cartasUser[0].valor + cartasUser[1].valor;
console.log("Usuário - cartas: "+ cartasUser[0].texto, cartasUser[1].texto+" - pontuação "+valorUser);


const cartasComp = [comprarCarta(), comprarCarta()];

valorComp = cartasComp[0].valor + cartasComp[1].valor;

console.log("Computador - cartas: "+ cartasComp[0].texto, cartasComp[1].texto+" - pontuação "+valorComp);

   if(valorUser > valorComp) {
      console.log("O usuário venceu!");
   } if(valorUser < valorComp) {
      console.log("O computador venceu!");
   } if(valorUser === valorComp) {
      console.log("Deu empate!");
   } else {
console.log("O jogo acabou!");
}