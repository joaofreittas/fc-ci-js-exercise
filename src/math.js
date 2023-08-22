function sum(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function div(x, y) {
    return x / y;
}

function mult(x, y) {
    return x * y;
}

function random(max) {
    return Math.floor(Math.random() * max);
}

function floor(number) {
    return Math.floor(number);
}

module.exports = {
    sum, sub, div, mult
}
