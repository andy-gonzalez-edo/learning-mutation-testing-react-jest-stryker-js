const {power, multiply} = require("./power");

// power
test('power positive exponent', () => {
    expect(power(5, 1)).toBe(5);
});

test('square 0 exponent', () => {
    expect(power(5, 0)).toBe(1);
});

test('power negative exponent', () => {
    expect(power(5, -1)).toBe(1/5);
});


// multiply

test('multiply positive numbers', () => {
    expect(multiply(5, 3)).toBe(15);
});

test('multiply a positive and a negative number', () => {
    expect(multiply(5, -3)).toBe(-15);
});

test('multiply two negative numbers', () => {
    expect(multiply(-5, -3)).toBe(15);
});

test('multiply a number by zero', () => {
    expect(multiply(5, 0)).toBe(0);
});
