function pow(base) {
  return function (exp) {
    let result = base;
    for (let i = 1; i < exp; i++) {
      result *= base;
    }
    return result;
  }
}

const pow2 = pow(2);
const pow5 = pow(5);

console.log('--- Power of 2 ---');
console.log(pow2(4));
console.log(pow2(2));
console.log(pow2(8));

console.log('--- Power of 5 ---');
console.log(pow5(4));
console.log(pow5(2));
console.log(pow5(8));
