const testingScope = (escopo) => {
    if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
}

  testingScope(true);
  testingScope(false);

  //Requisito 2
// Busquei orientação no site https://www.w3schools.com/jsref/jsref_sort.asp. Sintaxe: array.sort(compareFunction)
// Quando o método sort () compara dois valores, ele envia os valores para a função de comparação e os classifica de acordo com o valor retornado (negativo, zero, positivo). Exemplo : Ao comparar 40 e 100, o método sort () chama a função compare (40,100). A função calcula 40-100 e retorna -60 (um valor negativo). A função de classificação classificará 40 como um valor inferior a 100.

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];
    //funcção anônima:
  oddsAndEvens.sort(function(a, b){return a-b})
  console.log(`Os números ${oddsAndEvens} se encontram de forma crescente!`);

    //funcção nominal:
  function ordenaArray(a, b){
    return a - b;
  }

  console.log(`Os números ${oddsAndEvens.sort(ordenaArray)} se encontram de forma crescente!`);

  //Outro exemplo com texto:
  let fruit = ['cherries', 'apples', 'bananas']

  console.log(fruit.sort())

