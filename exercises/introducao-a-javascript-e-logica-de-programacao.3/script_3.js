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

let n = 6;
let asterisco = "*";
let triangulo = "";

for (let indexRet = 1; indexRet < n; indexRet +=1){
  triangulo = triangulo + asterisco;
  console.log(triangulo);
}

console.log("Terceiro Item")


let n = 6;
let asterisco = "*";
let triangulo2 = "";

for (let index3 = 1; index3 < n; index3 +=1){
  if (index3 == 1){
  triangulo2 = triangulo2 + asterisco;
  console.log("    "+ triangulo2);
} else if (index3 == 2){
  triangulo2 = triangulo2 + asterisco;
  console.log("   "+ triangulo2);
} else if (index3 == 3){
  triangulo2 = triangulo2 + asterisco;
  console.log("  " + triangulo2);
} else if (index3 == 4){
  triangulo2 = triangulo2 + asterisco;
  console.log(" " + triangulo2);
} else if (index3 == 5){
  triangulo2 = triangulo2 + asterisco;
  console.log("" + triangulo2);
}
}


