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
    let person = persons.find(element => element.id === id);
    if (person) {
      resolve(person);
    }
    else {
      reject(new Error(`La persona con l'id: ${id} non è presente nell'elenco`));
    }
  })
}
function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    let job = jobs.find(element => element.id === id);
    if (job) {
      resolve(job);
    }
    else {
      reject(new Error(`Il lavoro con l'id: ${id} non è presente nell'elenco`));
    }
  })
}
//Inserire gli id per provare
let job = fetchJobById();
let person = fetchPersonById();
Promise.all([job, person])
  .then(values => console.log(values))
  .catch(err => console.log(err.message));