/*  Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número (de 1 a 20). O programa deve começar pedindo o número a ser usado nos cálculos e então salvar todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma variável do tipo string. Depois o programa deve exibir esses resultados e finalizar.

*/

let number = Number(prompt('Digite um número: '))

for(let c = 1; c <= 20; c++){
  text = `${number} x ${c} = ${number * c}`
  alert(text)
}
