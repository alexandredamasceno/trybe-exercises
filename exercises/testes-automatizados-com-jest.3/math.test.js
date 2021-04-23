const { expect, test } = require('@jest/globals');
const math = require('./math');

describe('Testando subtração', () => {
    test('Testando subtração', () => {
        math.subtrair = jest.fn().mockImplementation((a, b) => a - b);

        math.subtrair(4, 2);
        expect(math.subtrair).toHaveBeenCalledTimes(1);
        expect(math.subtrair(4, 2)).toBe(2);
        expect(math.subtrair).toHaveBeenCalledTimes(2);
        expect(math.subtrair).toHaveBeenLastCalledWith(4, 2);
    })
    
    test('Testando multiplicação', () => {
        math.multiplicar = jest.fn().mockImplementation((a, b) => a * b);

        math.multiplicar(5, 2);
        expect(math.multiplicar).toHaveBeenCalledTimes(1);
        expect(math.multiplicar(5, 2)).toBe(10);
        expect(math.multiplicar).toHaveBeenCalledTimes(2)
    })

    test('Testando soma', () => {
        expect(math.somar(9, 8)).resolves.toBe(17);
        math.somar = jest.fn().mockImplementation((a, b) => a + b);

        math.somar(7, 22);
        expect(math.somar).toHaveBeenCalledTimes(1);
        expect(math.somar(7, 22)).toBe(29);
        expect(math.somar).toHaveBeenLastCalledWith(7, 22);
    })

    test('Testando divisão', () => {
        const mathDiv = jest.spyOn(math, 'dividir');
        mathDiv.mockReturnValueOnce(15);
        mathDiv(30, 2);
        expect(mathDiv).toHaveBeenCalledTimes(1);
        expect(mathDiv(30, 2)).toBe(15);
        expect(mathDiv(2, 5)).toBe(0.4);
        expect(mathDiv).toHaveBeenCalled()
        expect(mathDiv).toHaveBeenLastCalledWith(2, 5);
    })

    test('Testando subtração again', () => {
        math.subtrair = jest.fn().mockImplementation((a, b) => a - b);
        math.subtrair.mockReturnValue(20);

        math.subtrair(40, 20);
        expect(math.subtrair).toHaveBeenCalledTimes(1);
        expect(math.subtrair(40, 20)).toBe(20);

        math.subtrair.mockRestore();
        math.subtrair(10, 5);
        expect(math.subtrair).toHaveBeenCalledTimes(1);
        expect(math.subtrair(10, 5)).toBe(undefined);

    })
})