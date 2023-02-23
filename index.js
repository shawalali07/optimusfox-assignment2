const students = [
  { name: 'Alice', grade: 90 },
  { name: 'Charlie', grade: 95 },
  { name: 'Bob', grade: 80 },
  { name: 'Dave', grade: 85 },
];

const newStudents = [
  { name: 'Eve', grade: 88 },
  { name: 'Frank', grade: 92 },
];

// task 1
// const result = students.concat(newStudents);

// console.log(result);

// task 2
// for (let [key, val] of Object.entries(students)) {
//   console.log(
//     `The key ${key} has value of name as ${val.name} and grade as ${val.grade}`
//   );
// }

// task 3
// const result = students.every((student) => student.grade >= 70);

// console.log(result);

// task 4
// const result = students.map(({ grade }) => grade).fill(100);

// console.log(result);

// task 5
// const result = students.filter(({ grade }) => grade > 90);

// console.log(result);

// task 6
// const result = students.find(({ name }) => name === 'Charlie');

// console.log(`Charlie's grade ${result.grade}`);

// task 7
// const result = students.findIndex(({ grade }) => grade === 85);

// console.log(result);

const nestedArray = [[1, 2], [3, 4, 5], [6]];

// task 8
// const result = nestedArray.flat();

// console.log(result);

// task 9
// const result = students.flatMap(({ grade }) => grade >= 70);

// console.log(result);

// task 10
// students.forEach(({ name }) => console.log(name));

const string = 'hello world';

// task 11
// const result = Array.from(string);

// console.log(result);

// task 12
// const result = students.map(({ name }) => name.includes('Eve'));

// console.log(result);

// task 13
// const indexOfStudent = (arr) => {
//   const find = arr.map(({ name }) => name.indexOf('Bob'));
//   const result = find.findIndex((val) => val === 0);
//   return result;
// };

// console.log(indexOfStudent(students));

// task 14
// const result = students.map(({ grade }) => grade);

// console.log(result);

// task 15
// students.push({ name: 'Grace', grade: 87 });

// console.log(students);

// task 16
// students.pop();

// console.log(students);

// task 17
// const result = students.reverse();

// console.log(result);

// task 18
// students.shift();

// console.log(students);

// task 19
// const result = students.reduce((avg, student) => {
//   let { grade } = student;
//   return avg + grade / students.length;
// }, 0);

// console.log(result);
