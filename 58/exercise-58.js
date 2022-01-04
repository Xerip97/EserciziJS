const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    let person = persons.find(item => item.id === id);
    if (person) {
      resolve(person);
    }
    else {
      reject(new Error("Persona non trovata"));
    }
  });
}

fetchPersonById(2)
  .then(person => console.log(person))
  .then(fetchPersonById(5)
    .then(person => console.log(person))
    .catch(err => console.log("Errore nella ricerca: ", err.message)));