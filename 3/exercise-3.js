const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
  // students[students.length] = student;
  students.push(student);
}

addStudent('Marco');
console.log(students);