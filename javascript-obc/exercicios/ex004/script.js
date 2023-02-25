/*  Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as celocaides são iguais se este for o caso)
*/
car1 = prompt('Nome do 1° carro: ')
vel1 = Number(prompt(`Velocidade do ${car1}: `))

car2 = prompt('Nome do 2° carro: ')
vel2 = Number(prompt(`Velocidade do ${car2}: `))

if (vel1 == vel2){
  print(`O carro ${car1} e o ${car2}, possuem a mesma velocidade.`)
}else if (vel1 > vel2){
  print(`${car1} está com uma velocidade maior que o ${car2}.`)
}else{
  print(`${car2} está com uma velocidade maior que o ${car2}.`)
} 