/*  Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o progrma deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.

*/

let qtd = Number(prompt("Quanto de dinheiro possuí: "));
let qtd_adc;
let qtd_sbt;
do {
  res = Number(
    prompt(
      `Dinheiro atual: ${qtd}\n\n[1] Para adicionar valor\n[2] Para subtrair valor\n[3] Para sair`
    )
  );
  if (res == 1) {
    qtd_adc = Number(prompt("Qual quantidade a se adicionada: "));
    qtd += qtd_adc;
  } else if (res == 2) {
    qtd_sbt = Number(prompt("Qual quantidade a se retirada: "));
    qtd -= qtd_sbt;
  }
} while (res == 1 || res == 2);

if (res < 1 || res > 3) {
  alert("Opção inválida, tente novamente!");
}
