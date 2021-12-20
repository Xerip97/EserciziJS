class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  fromJson(json) {
    const person = JSON.parse(json);
    return new Person(...(Object.values(person)));
  }

  toJson() {
    return JSON.stringify(this);
  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
let developer = new Person;
developer = developer.fromJson(json);
console.log(developer);