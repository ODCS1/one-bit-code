/* Escreva um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são:

- O primeiro nome
- O sobrenome
- O campo de Estudo
- O ano de nascimento

  Depois mostrar o nome completo do recruta, seu campo de estudo e a sua idade (apenas baseada no ano de nascimento).
*/

let nome = window.prompt('Primeiro nome: ')
let sobrenome = window.prompt('Sobrenome: ')
let cestudo = window.prompt('Campo de estudo: ')
let anasc = window.prompt('Ano de nascimento: ')
anasc = Number(anasc)

let agora = new Date()
let ano = agora.getFullYear()

window.alert(`Nome completo: ${nome} ${sobrenome}\nCampo de estudo: ${cestudo}\nIdade: ${ano - anasc}`)