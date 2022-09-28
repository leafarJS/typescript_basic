function getNumber(num) {
    return num + 10;
}
function getOtherNumber(num) {
    if (num === void 0) { num = 10; }
    return "El numero es ".concat(num + 10);
}
var numerico = function (num) {
    return Math.pow(num, 10);
};
console.log(getNumber(25));
console.log(getOtherNumber(100));
console.log(numerico(100));
