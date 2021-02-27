console.log("Primeiro Item")
// Busquei orientação no próprio gabarito do Course.
let n = 6;
let asterisco = "*";
let quadradoAsterisco = "";

for (let index = 1; index < n; index +=1){
  quadradoAsterisco = quadradoAsterisco + asterisco;
}
for (let index = 1; index < n; index +=1) {
  console.log(quadradoAsterisco);
}

console.log("Segundo Item");
// Mais uma vez eu busquei orientação no gabarito do Course.
let n2 = 6;
let asterisco = "*";
let triangulo = "";

for (let indexRet = 1; indexRet <=n2; indexRet +=1){
  console.log(triangulo);
  triangulo = triangulo + asterisco;
}

console.log("Terceiro Item")

let n4 = 6;
let asterisco2 = "*";
let triangulo2 = "";

for (let index3 = 1; index3 <= n4; index3 +=1){
  if (index3 == 1){
  console.log("     "+ triangulo2);
  triangulo2 = triangulo2 + asterisco2;
} else if (index3 == 2){
  console.log("    "+ triangulo2);
  triangulo2 = triangulo2 + asterisco2;
} else if (index3 == 3){
  console.log("   " + triangulo2);
  triangulo2 = triangulo2 + asterisco2;
} else if (index3 == 4){
  console.log("  " + triangulo2);
  triangulo2 = triangulo2 + asterisco2;
} else if (index3 == 5){
  console.log(" " + triangulo2);
  triangulo2 = triangulo2 + asterisco2;
} else if (index3 == 6){
  console.log("" + triangulo2);
  triangulo2 = triangulo2 + asterisco2;
} 
}