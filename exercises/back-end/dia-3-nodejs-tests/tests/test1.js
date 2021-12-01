const { expect } = require('chai');

const isPositivoOrNegatioOrNeutro = require('../index');

describe("Executa a função isPositivoOrNegatioOrNeutro", () => {
    it('retorna uma string', () => {
        const result = isPositivoOrNegatioOrNeutro();

        expect(result).to.be.a('string');
    });
    it(`Quando o número passado for maior que 0 deverá retornar "positivo"`, () => {
        const result = isPositivoOrNegatioOrNeutro(4);

        expect(result).to.be.equals('positivo');
    });
    it(`quando for menor que 0 deverá retornar "negativo"`, () => {
        const result = isPositivoOrNegatioOrNeutro(-4);

        expect(result).to.be.equals('negativo');
    });
    it(`quando igual a 0 deverá retornar "neutro"`, () => {
        const result = isPositivoOrNegatioOrNeutro(0);

        expect(result).to.be.equals('neutro');
    });
});
