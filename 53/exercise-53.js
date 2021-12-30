function sum(...num) {
    return num.reduce(function (num1, num2) { return num1 + num2 });
}

console.log(sum(1, 2, 3, 4, 5));