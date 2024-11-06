// Task 4
// Given the object below, add a new property to it called fullName.
// The property should combine the values from firstName and lastName, separated by a space.
// const person = {
//     firstName: "Jim",
//     lastName: "Jameson",
//     age: 37
// };
// Expected output:
// {
//     firstName: "Jim",
//     lastName: "Jameson",
//     age: 37,
//     fullName: "Jim Jameson"
// };

const person = {
  firstName: 'Jim',
  lastName: 'Jameson',
  age: 37,
};

person['fullName'] = 'Jim Jameson';
console.log(person);
