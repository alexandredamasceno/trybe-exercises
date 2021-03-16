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



