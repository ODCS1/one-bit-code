/*  Escreva um programa em javascript que funcione com um conversor de medidas.
O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:

  - milímetro (mm)
  - centímetro (cm)
  - decímetro (dm)
  - hectômetro (hm)
  - quilômetro (km)

O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

O programa também deve exibir uma mensagem de "Opção inválida" caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso).

Obs: Utilizado o if e na próxima o switch
*/

let valor = Number(prompt('Digite uma medida em metros: '))
let opcoes = prompt('As opções para tranformação: \n Para milímetro: mm \n Para centímetro: cm \n Para decímetro: dm \n Para hectômetro: hm \n Para quilômetro: km')

if (opcoes == 'mm'){
  valor *= 1000
  alert(`O valor convertido para ${opcoes} ficou ${valor}${opcoes}`)
}else if(opcoes == 'cm'){
  valor *= 100
  alert(`O valor convertido para ${opcoes} ficou ${valor}${opcoes}`)
}else if(opcoes == 'dm'){
  valor *= 10
  alert(`O valor convertido para ${opcoes} ficou ${valor}${opcoes}`)
}else if(opcoes == 'km'){
  valor *= 1/1000
  alert(`O valor convertido para ${opcoes} ficou ${valor}${opcoes}`)
}else{
  alert('Opção inválida')
}