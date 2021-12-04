const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

//gli oggetti, per default, vengono passati per riferimento.
//Utilizzando il metodo "assign()", appartenente alla classe Object, il passaggio avviene per valore.
const person2 = Object.assign({}, person1);
// Modifica la proprietà "firstName" di person2 in "Simon"
person2.firstName = 'Simon';

console.log(person1);
console.log(person2);