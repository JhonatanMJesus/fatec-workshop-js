//Correção do código - Fatec Jahu Workshop JS
//Nome: Jhonatan MArcelino de Jesus
//DSM - 2º Semestre

function somar() {
  const y = 5; //Declarando a variavel y como constante pois nao sofrerá alteração.
  let x = 5; //Declarando x como let pois só será usada dentro dessa função e poderá sofrer alteração.
  x = x + 10; //Realiza uma operação de acúmulo na variável x.
  let r = x + y; //Realiza a soma entre as variaveis x e y e guarda o resultado dentro da variavel r
  return r;
}

console.log('O resultado da soma é: ' + somar());
