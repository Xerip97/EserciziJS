function memoize(fn) {
  let cache = {
    factorialCache: []
  };
  return function (x) {
    if (cache.factorialCache[x]) {
      return cache.factorialCache[x];
    } else {
      cache.factorialCache[x] = fn(x);
      return cache.factorialCache[x];
    }
  }
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
}

const fact = memoize(factorial);
console.log(fact(10));
console.log(fact(6));
console.log(fact(5));