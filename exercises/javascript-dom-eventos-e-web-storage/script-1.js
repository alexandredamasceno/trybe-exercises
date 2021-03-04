function changeText (text){
    document.querySelectorAll(".center-content p")[0].innerText = text;
}

changeText("Como um excelente programador, comprometido, dedicado e SEMPRE CURIOSO, nada acomodado, dando o meu melhor sempre.");

function changesColor (color){
    document.querySelector("div").style.backgroundColor = color;
}

changesColor("rgb(76,164,109)");

function changesColorSquare (color){
    document.getElementsByClassName("center-content")[0].style.backgroundColor = color;
}
changesColorSquare("white");

function fixText (text){
    document.querySelector("h1").innerText = text;
}

fixText ("Exercício 5.1 - JavaScript");

function textUppercase (){
    document.querySelectorAll("p")[0].style.textTransform= "uppercase";
}

textUppercase();

function showTextConsole (tag){

    let retorno = document.getElementsByTagName(tag);
    for (let i in tag){
        if (tag[i] == [0]){
            console.log(tag[0].innerText);
        }else if (tag[i] == [1]){
            console.log(tag[1].innerText);
        }else if (tag[i] == [2]){
            console.log(tag[2].innerText)
        }
    }
}
showTextConsole("p")

