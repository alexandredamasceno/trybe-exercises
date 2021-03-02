
// Eu busquei orientação no gabarito e dentre as duas formas de resolver esse problema eu preferi o segundo jeito, que foi o que eu mais entendi.
  function analisaPalindrome (words){
    let string = words.split("").reverse().join("");
      if (string == words) {
        return true;
      } else {
        return false;
      }
  }

  console.log(analisaPalindrome("arara"))
  console.log(analisaPalindrome("Desenvolvedor"))

  console.log("Segundo Item")
  //Achar chave de maior valor

  function maiorKey (chave){
  let maiorChave = 0;

  for (let key in chave){
    if (chave[key] > maiorChave){
      maiorChave = [key]
    }
  }
  return maiorChave
}
  console.log(maiorKey([2, 3, 6, 7, 10, 1]))

  console.log("Terceiro requisito")
//Achar a chave de menor valor
//Busquei orientação no gabarito. Entendi todo o conceito.

  function menorKey (chave){
    let menorChave = 0;
  
    for (let key in chave){
      if (chave[menorChave] > chave[key]) {
        menorChave = key;
      }
    }
    return menorChave
  }
  console.log(menorKey([2, 4, 6, 7, 10, 0, -3]))
