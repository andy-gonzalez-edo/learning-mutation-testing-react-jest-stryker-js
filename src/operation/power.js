
function power(base, exponent) {
    if (exponent === 0)
        return 1;
    if (exponent === 1)
        return base;

    const isExponentNegative = exponent < 0;
    const modularExponent = Math.abs(exponent);

    const power = Array(modularExponent)
        .fill(base)
        .reduce((acc, curr) => multiply(acc, curr), 1)

    return isExponentNegative
        ? 1 / power
        : power;
}

function multiply(a, b) {
    const product = Array(Math.abs(a))
        .fill(Math.abs(b))
        .reduce((acc, curr) => acc + curr, 0);

    return (a < 0 && b > 0) || (a > 0 && b < 0)
        ? -product
        : product;
}

exports.power = power;
exports.multiply = multiply;
