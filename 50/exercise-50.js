class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static fromJson(json) {
    const person = JSON.parse(json);
    return new Person(...(Object.values(person)));
  }

  toJson() {
    return JSON.stringify(this);
  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
let developer = Person.fromJson(json);
console.log(developer);

class Maty {
  static metodo1() {

  }
  static sum(a, b) {
    return a + b;
  }
}

console.log(Maty.sum(2, 3));