let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  console.log("Bem-vinda, "+info.personagem)

  console.log("Segundo Item");

  info.recorrente = "Sim";

  console.log(info)

  console.log("Terceiro Item");

  for (let key in info) {
      console.log(key);
  }

  console.log("Quarto item");

  for (let key in info) {
      console.log(info[key])
  }