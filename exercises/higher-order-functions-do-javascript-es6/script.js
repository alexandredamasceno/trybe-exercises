const newEmployees = (callBack) => {
    const employees = {
      id1: callBack('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
      id2: callBack('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
      id3: callBack('Carla Paiva'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
    }
    return employees;
  };

  
  const nomeEmail = (nomeCompleto) => {
    let email1 = nomeCompleto.split(' ').join('_').toLowerCase();
    return {
        nome: nomeCompleto,
        email: `${email1}@trybe.com`,
    }
}
nomeEmail('Alexandre Damasceno da Silva');


console.log(newEmployees(nomeEmail));

// Requisito 2:
// Usei como base para responder esse requisito o site:http://devfuria.com.br/javascript/numeros-aleatorios/#:~:text=random()%3B,dimensionar%20para%20o%20intervalo%20desejado. e o Developer Mozilla.

const resultadoSorteio = (numeroApostado, callback2) => {
  let numeroAleatorio = Math.ceil(Math.random() * 5);
  return callback2(numeroAleatorio, numeroApostado);
};

const validaNumero = (numeroRandom, numeroSorte) => {
  if (numeroSorte === numeroRandom){
    return 'Parabéns você ganhou'
  } else {
    return 'Tente novamente';
  }
};

console.log(resultadoSorteio(4, validaNumero));



