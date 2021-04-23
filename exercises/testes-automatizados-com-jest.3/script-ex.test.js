const script = require('./script-ex');

test('Testando soma', () => {
    const sum = jest.spyOn(script, 'getNumber');
    sum.mockReturnValue(10);

    sum();
    expect(sum).toHaveBeenCalledTimes(1);
    expect(sum).toHaveBeenCalled();
    expect(sum()).toBe(10);
})

test('New implementation', () => {
    script.getNumber = jest.fn().mockImplementation((a, b) => a / b);

    script.getNumber(10, 5);
    expect(script.getNumber).toHaveBeenCalled();
    expect(script.getNumber(10, 5)).toBe(2);
    expect(script.getNumber).toHaveBeenCalledTimes(2);
})

test('New implementation two', () => {
    script.getNumber = jest.fn().mockImplementation((a, b, c) => (a * b) * c);

    script.getNumber(2, 2, 2);
    expect(script.getNumber).toHaveBeenCalled();
    expect(script.getNumber(2, 2, 2)).toBe(8);
    expect(script.getNumber).toHaveBeenCalledTimes(2);

    script.getNumber.mockRestore();
    script.getNumber = jest.fn().mockImplementation((a) => a * 2);

    script.getNumber(2);
    expect(script.getNumber).toHaveBeenCalled();
    expect(script.getNumber(4)).toBe(8);
    expect(script.getNumber).toHaveBeenCalledTimes(2);
})