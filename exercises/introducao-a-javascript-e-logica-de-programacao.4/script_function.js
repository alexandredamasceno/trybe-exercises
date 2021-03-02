
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