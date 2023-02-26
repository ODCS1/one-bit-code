/*  Escreva um menu interativo com 5 opções diferentes. O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, a última opção deve ser a opção 'Encerrar'. Ao clicar em alguma das quatro primeiras opções uma mensagem deve exibir novamente o menu com as 5 opções. Isso deve continuar acontecendo até que o usuário escolha a opção 'Encerrar'. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.
 */

let opcoes;
do {
  opcoes = Number(
    prompt(
      "Opções disponíveis:\n\n[1]Adicionar\n[2]Responder\n[3]Ver outro\n[4]Clicar\n[5]Sair"
    )
  );
} while (opcoes < 5 && opcoes > 0);

if (opcoes > 5 || opcoes < 1 && opcoes != ''){
  alert("Você digitou uma opção inválida, tente novamente!");
} else if (opcoes == 5) {
  alert("O sistema está sendo encerrado...");
} else {
  alert("Opção inválida, digite algo válido.");
}
