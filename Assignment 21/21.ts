// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let personDetails: {name: string, gender: string, age: number, feild: string } = 
{name: "Shakir Hussain", gender: "Male", age: 30, feild: "Student" }

console.log(`My name is: ${personDetails.name}`);
console.log(`My gender is: ${personDetails.gender}`);
console.log(`My age is: ${personDetails.age}`);
console.log(`I am a: ${personDetails.feild}`);