function calculate() {
  const calc = {
    value: 0,
    add(num) {
      this.value += num;
      return calc;
    },
    multiply(num) {
      this.value *= num;
      return calc;
    },
    sub(num) {
      this.value -= num;
      return calc;
    },
    divide(num) {
      this.value /= num;
      return calc;
    },
    printResult() {
      return console.log(this.value);
    }
  };
  return calc;
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7