function countStudents(students: number[], sandwiches: number[]): number {
  let counter = 0;

  while (counter <= students.length) {
    if (students[0] === sandwiches[0]) {
      sandwiches.shift();
      counter = 0;
    } else {
      students.push(students[0]);
    }
    students.shift();
    counter++;
  }

  return students.length;
}

countStudents([1, 1, 0, 0], [0, 1, 0, 1]);
