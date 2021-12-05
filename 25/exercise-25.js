const person = {
  firstName: null,
  lastName: null,
  setFirstName(firstName) {
    this.firstName = firstName;
  },
  getFirstName() {
    return this.firstName;
  },
  setLastName(lastName) {
    this.lastName = lastName;
  },
  getLastName() {
    return this.lastName;
  },
  fullName() {
    return `${this.getFirstName()} ${this.getLastName()}`;
  }
}

const john = Object.assign({}, person);
const simon = Object.assign({}, person);
john.setFirstName('John');
john.setLastName('Doe');
simon.setFirstName('Simon');
simon.setLastName('Collins');
console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins