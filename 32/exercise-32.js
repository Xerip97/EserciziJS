function uncompletedNotes(notes) {
  /* Se si desiderano le note incomplete, vale la parte */
  // const notCompleted = notes.filter(nota => {
  //   let undone = nota.todos.find(todo => todo.done === false);
  //   if (undone) {
  //     return this;
  //   }
  // })
  // return notCompleted;
  const todoIncompleti = [];
  notes.forEach(note => {
    note.todos.forEach(todo => {
      if (todo.done === false) {
        todoIncompleti.push(todo);
      }
    })
  });
  return todoIncompleti;
}

const notes = [
  {
    id: 1,
    description: 'Workout program',
    todos: [
      {
        id: 1,
        name: 'Push ups - 10 x 3',
        done: false
      },
      {
        id: 2,
        name: 'Abdominals - 20 x 3',
        done: true
      },
      {
        id: 3,
        name: 'Tapis Roulant - 15min',
        done: true
      }
    ]
  },
  {
    id: 2,
    description: 'Front-end Roadmap',
    todos: [
      {
        id: 1,
        name: 'Learn HTML',
        done: true
      },
      {
        id: 2,
        name: 'Learn CSS',
        done: true
      },
      {
        id: 3,
        name: 'Learn JavaScript',
        done: true
      },
      {
        id: 4,
        name: 'Learn Angular',
        done: true
      }
    ]
  }
]

const notesInProgress = uncompletedNotes(notes);
console.log('All notes: \n', notes);
console.log('Notes In Progress: \n', notesInProgress);