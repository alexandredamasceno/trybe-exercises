function isPositivoOrNegatioOrNeutro(number) {
    let res = "";
    if(number > 0) {
        console.log('positivo');
        res = "positivo"
    } else if (number < 0) {
        console.log('negativo');
        res = "negativo";
    } else {
        console.log('neutro')
        res = "neutro";
    }
    return res;
};

isPositivoOrNegatioOrNeutro(-4);

module.exports = isPositivoOrNegatioOrNeutro;