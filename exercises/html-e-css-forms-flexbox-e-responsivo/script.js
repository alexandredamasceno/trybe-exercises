let estadoPai = document.getElementById("input-estado");
let estadosBr = [ 'AC - Acre', 'AL - Alagoas', 'AP - Amapá', 'AM - Amazonas', 'BA - Bahia', 'CE - Ceará', 'DF - Distrito Federal', 'ES - Espírito Santo', 'GO - Goías', 'MA - Maranhão', 'MT - Mato Grosso', 'MS - Mato Grosso do Sul', 'MG - Minas Gerais', 'PA - Pará', 'PB - Paraíba', 'PR - Paraná', 'PE - Pernambuco', 'PI - Piauí', 'RJ - Rio de Janeiro', 'RN - Rio Grande do Norte', 'RS - Rio Grande do Sul', 'RO - Rondônia', 'RR - Roraíma', 'SC - Santa Catarina', 'SP - São Paulo', 'SE - Sergipe', 'TO - Tocantins' ];
let gurdaNumero = [];
for (let i = 0; i < 27; i += 1){
    let Numero = [i];
    gurdaNumero.push(Numero);
}


for (let i = 0; i < estadosBr.length; i += 1){
    let guardaEstado = estadosBr[i];
    let numeroEstado = gurdaNumero[i];
    let criaEstados = document.createElement("option");
    criaEstados.innerHTML = guardaEstado;
    criaEstados.id = "estado - " + numeroEstado;
    
    estadoPai.appendChild(criaEstados)
}

//Botão Salvar

let botaoSalvar = document.getElementById("salvar");

botaoSalvar.addEventListener("click", function(event){
    let todosInputs = document.querySelectorAll("input");

    for (let i = 0; i < todosInputs.length; i += 1){
        if (i == 9){
            if (validaData(todosInputs[i].value) == false){
                event.preventDefault();
            }
        }
    }
})

// Requisito 2, último item. Nesse caso eu busquei orientação no repositótio remoto da minha colega Duda Wiltiner. Link:https://github.com/dudawiltiner/meu-repo-trybe/pull/21/commits/776ddf25480ee01e919ef7ce2a49f3438d5b98dd
function validaData(data){

    let validado = false; 

    let dia = data.split("/")[0];
    let mes = data.split("/")[1];
    let ano = data.split("/")[2];
    let MyData = new Date(ano, mes - 1, dia);// mes - 1, porque os meses são de 0(janeiro 1) a 11(dezembro 12)
    console.log(dia.length);
    console.log(mes.length);
    console.log(ano.length);
    console.log(MyData)
    if(dia.length !== 2 || mes.length !== 2 || ano.length !== 4){
        alert("Data no formato incorreto.")
    }
    //Ex: mes -1 = mês 12 na posição 11. Depois vamos comparar= getMonth 12 + 1, ou seja, o mes 12 na posição 12(11+1) é diferente de mes(12 na posição 11)? Se sim, mostra a frase. No else if ele faz comparação com a formatação.
    else if((MyData.getMonth() + 1 != mes) || (MyData.getDate() != dia) ||(MyData.getFullYear() != ano)){
        alert("Valores inválidos para o dia, mês ou ano. Favor, corrigir!");
    }
    else{
        validado = true;
    }

    return validado;
} 


