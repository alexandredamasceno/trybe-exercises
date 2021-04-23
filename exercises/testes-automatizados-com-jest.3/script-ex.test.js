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