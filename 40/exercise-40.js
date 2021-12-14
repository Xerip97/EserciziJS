class Person {
  constructor(firstName, lastName, age) {
    this.setFirstName = firstName;
    this.setLastName = lastName;
    this.setAge = age;
  }
  set setFirstName(firstName) {
    this.firstName = firstName;
  }
  set setLastName(lastName) {
    this.lastName = lastName;
  }
  set setAge(age) {
    this.age = age;
  }
  get getFirstName() {
    return this.firstName;
  }
  get getLastName() {
    return this.lastName;
  }
  get getAge() {
    return this.age;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.setFirstName = 'Maria';
person.setLastName = 'Verdi';
console.log(person.fullName);
// person.firstName = 'Maria';
// person.lastName = 'Verdi';
// console.log(person.fullName);