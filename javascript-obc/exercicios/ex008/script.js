/*  Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não, No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.
 */

const nome = prompt("Olá turista, qual é o seu nome: ");

let cidades = "";
let qtd = 0;

let res = prompt("Você já visitou alguma cidade[s/n]?").toLowerCase();

if (res === "s") {
  qtd += 1;
  cidades += " " + prompt("Qual o nome dessa cidade: ");
  do {
    res = prompt(`${nome}, você já visitou outra cidade[s/n]?`).toLowerCase();
    if (res === "s") {
      qtd += 1;
      cidades += ", " + prompt("Qual o nome dessa cidade: ");
    }
  } while (res == "s");
}else if (res != 's' && res != 'n'){
  alert('Escolha uma opção válida!')
}

if (cidades == "") {
  alert("Boa sorte, em conhecer as cidades então!");
} else {
  alert(`${nome}, você visitou ${qtd} cidades já.`);
  alert(`Cidades visitadas: ${cidades}.`);
}


