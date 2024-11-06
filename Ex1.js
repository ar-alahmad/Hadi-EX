// Create a function called betterTypeOf that accepts a single parameter called value and returns the type of that value.
// For example:
// betterTypeOf(1); // 'number'
// betterTypeOf("hello"); // 'string'
// betterTypeOf(true); // 'boolean'
// betterTypeOf(""); // 'string'
// betterTypeOf([1, 2, 3]); // 'array'
// betterTypeOf(["a", "b", "c"]); // 'array'
// const person = {
//     fullName: "Sandy Smith",
//     age: 28
// };
// betterTypeOf(person); // "object"
// Pay particular attention at the cases where the value is an array.

function betterTypeOf(value) {
  switch (true) {
    case Array.isArray(value):
      return 'array';
    default:
      return typeof value;
  }
}

console.log(betterTypeOf(1)); 
console.log(betterTypeOf("hello")); 
console.log(betterTypeOf(true)); 
console.log(betterTypeOf("")); 
console.log(betterTypeOf([1, 2, 3])); 
console.log(betterTypeOf(["a", "b", "c"]));

const person = {
    fullName: "Sandy Smith",
    age: 28
};
console.log(betterTypeOf(person));
