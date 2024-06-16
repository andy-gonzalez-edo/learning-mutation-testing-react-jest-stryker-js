
function power(base, exponent) {
    const isExponentNegative = exponent <= -1;
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
