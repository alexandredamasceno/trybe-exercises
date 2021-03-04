function changeText (text){
    document.querySelectorAll(".center-content p")[0].innerText = text;
}

changeText("Como um excelente programador, comprometido, dedicado e SEMPRE CURIOSO, nada acomodado, dando o meu melhor sempre.")

function changesColor (color){
    document.querySelector("div").style.backgroundColor = color;
}

changesColor("rgb(76,164,109)")
