const person = {
  firstName: null,
  lastName: null,
  set firstName(firstName) {
    this._firstName = firstName;
  },
  get firstName() {
    return this._firstName;
  },
  set lastName(lastName) {
    this._lastName = lastName;
  },
  get lastName() {
    return this._lastName;
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