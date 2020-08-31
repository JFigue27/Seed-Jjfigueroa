var students = ['Miriam', 'Sara', 'Emma', 'Jaime'];

function greetingStudents(student) {
  console.log(`Hi ${student}`);
}

for (let i = 0; i < students.length; i++) {
  greetingStudents(students[i]);
}

console.log('=======================');

for (var student of students) {
  greetingStudents(student);
}

console.log('=======================');
while (students.length > 0) {
  console.log(students);
  let stud = students.shift();
  greetingStudents(stud);
}
