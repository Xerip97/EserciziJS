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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      let person = persons.find(element => element.id === id);
      if (person) {
        resolve(person);
      }
      else {
        reject(new Error(`Persona non trovata`));
      }
    }, 1000);
  });
}

function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let job = jobs.find(element => element.id === id);
      if (job) {
        resolve(job);
      }
      else {
        reject(new Error(`Lavoro non trovato`));
      }
    }, 500);
  });
}

//Inserire gli id per provare
let person = fetchPersonById();
let job = fetchJobById();
Promise.race([person, job])
  .then(value => console.log(value))
  .catch(err => console.log(err.message));