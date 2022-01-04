let numberStore = [0, 1, 2];
let newNumber = 3;

numberStore = [...numberStore, newNumber];
// numberStore.push(newNumber); OK, però push sembra migliore 
console.log(numberStore);