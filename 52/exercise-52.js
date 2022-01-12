const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

function replacer(key, value) {
  if (typeof value !== 'string') {
    return value;
  }
  return undefined;
}

const json = JSON.stringify(person, replacer);

console.log(json); // Should return: { id: 1, age: 25 }