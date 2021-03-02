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

  console.log("Quinto item");

  let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim",
  };

  console.log(info.personagem+" e "+info2.personagem+": "+info.origem+" e "+info2.origem+" "+info.nota+" e "+info2.nota+" ambos recorrentes.")