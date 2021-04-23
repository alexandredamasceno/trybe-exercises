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

test('New implementation to the upperCase', () => {
    script.upperCase = jest.fn().mockImplementation((string) => string.toLowerCase());

    script.upperCase("AMOR");
    expect(script.upperCase).toHaveBeenCalled();
    expect(script.upperCase('AMOR')).toBe('amor');
    expect(script.upperCase).toHaveBeenCalledTimes(2);
})

test('New implementation to first word', () => {
    script.firstWord = jest.fn().mockImplementation((string) => string.substr(string.length - 1));

    script.firstWord("Amor");
    expect(script.firstWord).toHaveBeenCalled();
    expect(script.firstWord('Amor')).toBe('r');
    expect(script.firstWord).toHaveBeenCalledTimes(2);
})

test('New implementation to the concat', () => {
    script.concatString = jest.fn().mockImplementation((string1, string2, string3 ) => `${string1}${string2}${string3}`);

    script.concatString("Hello", "world", "!");
    expect(script.concatString).toHaveBeenCalled();
    expect(script.concatString("Hello", "world", "!")).toBe("Helloworld!");
    expect(script.concatString).toHaveBeenCalledTimes(2);
})