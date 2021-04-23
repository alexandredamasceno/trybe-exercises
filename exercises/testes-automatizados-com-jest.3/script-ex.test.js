const script = require('./script-ex');

test('Testando soma', () => {
    const sum = jest.spyOn(script, 'getNumber');
    sum.mockReturnValue(10);

    sum();
    expect(sum).toHaveBeenCalledTimes(1);
    expect(sum).toHaveBeenCalled();
    expect(sum()).toBe(10);
})