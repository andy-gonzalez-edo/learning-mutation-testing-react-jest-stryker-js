const {power, multiply} = require("./power");

// power
test('power positive exponent', () => {
    expect(power(5, 1)).toBe(5);
});

test('power positive exponent exponent 2', () => {
    expect(power(5, 2)).toBe(25);
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

test('multiply a negative and a positive number', () => {
    expect(multiply(-5, 3)).toBe(-15);
});

test('multiply a number by zero', () => {
    expect(multiply(0, 5)).toBe(0);
});

test('multiply zero by a negative number', () => {
    expect(multiply(0, -5)).toBe(0);
});

test('multiply a negative number by zero', () => {
    expect(multiply(-5, 0)).toBe(0);
});

test('multiply two negative numbers', () => {
    expect(multiply(-5, -3)).toBe(15);
});

test('multiply a number by zero', () => {
    expect(multiply(5, 0)).toBe(0);
});
