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
