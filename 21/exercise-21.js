const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  address: {
    state: 'Italy',
    region: 'Lazio',
    city: 'Rome'
  }
};

// Argh! Nonostante abbia utilizzato Object.assign(), modificando la proprietà "address",
// viene modificato il riferimento all'oggetto person1
// const person2 = Object.assign({}, person1);


/* Funziona, ma se volessimo aggiungere un ulteriore oggetto all'interno di person1, dovremmo scrivere un'altra riga di codice
person2.address = Object.assign({}, person1.address); */


const person2 = JSON.parse(JSON.stringify(person1));
person2.address.region = 'Lombardia';
person2.address.city = 'Milan';

console.log(person1);
console.log(person2);