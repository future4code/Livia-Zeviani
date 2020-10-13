// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
/*
1. Converte valor de dólares para reais. 
Aparece uma mensagem para o usuário "Informe o valor da cotação do dólar"
então o valor já é convertido em reais e retorna como R$valor.
Nesse caso específico vai mostrar a conversão de 100 dólares em reais.

2. O código apresenta o switch, que é uma condição. A partir do tipo 
de investimento que o usuário escolhe ele vai retornar o valor referente ao 
investimento. Nesse caso específico há duas constantes, a que retornará o novoMontante e 
o que retornará o segundoMontante. O novoMontante retornará 165 (pois é 150 x 1.1)
enquanto o segundoMontante retornará TIPO DE INVESTIMENTO INFORMADO INCORRETO 

3. O código tem um array chamado numeros com alguns números e dois arrays vazios
(array1 e array2).

O código então faz um loop com for em que pede que no array1 sejam colocados todos
os números pares (a partir daquele array numeros já declarado anteriormente) e
quando não forem pares irem para o array2.
O que será impresso no console será a quantidade de números dentro dos 3 arrays
(no array numeros, no array1 e no array2)

4. Nesse caso o código apresenta um array e pede para que ocorra um loop com a
condição de que o numero seja menor que positivo infinito e então ele seja o numero1
e outro loop com numero maior que 0 e então ele será o número2.
O que o console irá imprimir é -10 e 159.
*/

//EXERCICIOS DE LÓGICA DE PROGRAMAÇÃO
//1. map, filter, forreach


//map
const numeros = [1, 4, 9];

const raiz = numeros.map(Math.sqrt);

console.log(raiz);

//filter

const cafeDaManha = [
    { comida: "pão",  bebida:"leite", quantidade:1 },
    { comida: "torrada",  bebida:"suco", quantidade:1 },
    { comida: "fruta", bebida:"café", quantidade:2 },
  ]
  
  const comidaPao = cafeDaManha.filter((elemento, index, array) => {
    if(elemento.comida === "pão"){
      return true 
    }
    return false
  })
  
  console.log(comidaPao)

  //forreach

  const livro = [
      { nome: "Senhora", tipo: "Não sei", ano: 0},
      { nome: "Dom Casmurro", tipo:"Romance", ano:0},
      { nome: "O velho e o mar", tipo:"sei lá", ano:0}
    ]
                
    
    const novo = (elementoDoArray, indexDoElemento, array) =>{
        elementoDoArray.tipo = "Romance"
    
    }
    
    livro.forEach(novo) 

/*2
a) false
b) false
c) true
d) true
e) true

*/

/*3
Não funciona porque ele deveria ter criado uma função!

*/

function Pares(numero){
    const quantidadeDeNumerosPares = numero
    let i = 0
    while(i < quantidadeDeNumerosPares)
    {
        console.log( i * 2 )
        i++
    }
}
console.log(Pares(20))

//4

let classificarTriangulo = (a, b, c) => {
    if(a === b && b === c) {
        return "Triângulo Equilátero!";
    } else if (a === b || b === c || a === c) {
        return "Triângulo Isósceles!";
    } else {
        return "Triângulo Escaleno!"
    }
}
console.log(classificarTriangulo(10, 10, 3)); 

//5
let identificaNumero = (x, y) =>{
    if(x === y){
        alert(`Os números são iguais`); 
    } else if (x > y){
        console.log (`O primeiro número é maior que o segundo`);
        console.log (`A diferença entre os números é ${(x - y)}`);
        if(x % y === 0) {
            console.log(`${x} é divisivel por ${y}`)
        } else {
            console.log (`${x} não é divisivel por ${y}`)
        }
    } else { 
        console.log (`O segundo número é maior`);
        console.log(`A diferença entre eles é: ${(y - x)}`)
        if(y % x ===0) {
            console.log (`${y} é divisível por ${x}`)
        } else {
            console.log(`${y} não é divisível por ${x}`)
        }
    }
        
        }
        console.log(identificaNumero(1034,567))

        