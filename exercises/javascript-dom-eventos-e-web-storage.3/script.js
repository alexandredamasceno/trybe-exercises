function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  let listaPai = document.getElementById("days");

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for (let i in dezDaysList){
    let itens = dezDaysList[i];

    let criaListItens = document.createElement("li");
    criaListItens.innerHTML= itens;
    criaListItens.className="day"

    if (itens === 24){
      criaListItens.className="holiday day"
    }else if (dezDaysList[i] === 31){
      criaListItens.className="holiday day"
    }else if(itens === 25){
      criaListItens.className="holiday day friday"
    }else if(itens === 4){
      criaListItens.className="day friday"
    }else if(itens === 11){
      criaListItens.className="day friday"
    }else if(itens === 18){
      criaListItens.className="day friday"
    }


    listaPai.appendChild(criaListItens);
  }

  //Exercício 2
  function createButton (string){
    let botaoPai = document.querySelector(".buttons-container");

    let botao = document.createElement("button")
    botao.innerHTML=string
    botao.id="btn-holiday"

    botaoPai.appendChild(botao)
  }
  createButton("Feriados")
  

  //Exercício 3
  function backgroundHolidays (){

  let botaoFeriados = document.querySelector("#btn-holiday");
  let dayHolidays = document.querySelectorAll(".holiday");
  let colorHoliday = "rgb(238,238,238)";
  let newColorHoliday = "green";

  botaoFeriados.addEventListener("click", function (){
    for (let key = 0; key < dayHolidays.length; key +=1){
      if (dayHolidays[key].style.backgroundColor === newColorHoliday){
        dayHolidays[key].style.backgroundColor = colorHoliday;
      }else {
        dayHolidays[key].style.backgroundColor = newColorHoliday;
      }
      }
  })

  }
backgroundHolidays()

  //Exercício 4

  function fridayDay (string) {
    let paiFriday = document.querySelector(".buttons-container");
    let fridayChild = document.createElement("button");
    fridayChild.innerHTML=string;
    fridayChild.id="btn-friday"

    paiFriday.appendChild(fridayChild)

  }

  fridayDay("Sexta-feira")

  //Exercício 5

  function fridayText (array) {
    let buttonFriday = document.querySelector("#btn-friday");
    let fridayDays = document.querySelectorAll(".friday");
    let fridayArray = array
    let newText = "SEXTOU!!!";

    buttonFriday.addEventListener("click", function(){
        for (let key = 0; key < fridayDays.length; key +=1){
          if (fridayDays[key].innerHTML !== newText){
            fridayDays[key].innerHTML = newText;
          }else {
            fridayDays[key].innerHTML = fridayArray[key];
          }
        }
    })
  }
  fridayText([4, 11, 18, 25]);

  //Exercício 6
  function upperCase (){

    let daysWeek = document.querySelector("#days");

    daysWeek.addEventListener("mouseover",function(evento){
      evento.target.style.fontSize = "30px";
      evento.target.style.fontWeight = "600";
    })
  }
upperCase()
   
function lowCase (){

  let daysWeek = document.querySelector("#days");

  daysWeek.addEventListener("mouseout", function(evento){
    evento.target.style.fontSize="20px";
    evento.target.style.fontWeight="300"
  })

}
lowCase();

//Exercício 7
function tarefaPerson (string){
  let paiTarefa = document.querySelector(".my-tasks");
  let tarefaFilho = document.createElement("span");
  tarefaFilho.innerHTML=string;

  paiTarefa.appendChild(tarefaFilho);
}
tarefaPerson("Cozinhar");

