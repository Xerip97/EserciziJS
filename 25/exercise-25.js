const person = {
  firstName: null,
  lastName: null,
  set setFirstName(firstName) {
    this.firstName = firstName;
  },
  get getFirstName() {
    return this.firstName;
  },
  set setLastName(lastName) {
    this.lastName = lastName;
  },
  get getLastName() {
    return this.lastName;
  },
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const john = Object.assign({}, person);
const simon = Object.assign({}, person);
john.firstName = 'John';
john.lastName = 'Doe';
simon.firstName = 'Simon';
simon.lastName = 'Collins';
console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins