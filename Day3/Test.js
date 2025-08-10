// javascript is dynamically typed language . how to prove it ? 


let age = 30;
console.log(typeof age); // Output: "number"

age = "30"; // Now age is a string, not a number  // this is dynamic typing 
console.log(typeof age); // Output: "string"

console.log(age); // Output: "30"
// In a statically typed language, you would have to declare the type of the variable explicitly

// typesafty = // in javascript we can use typescript to make it typesafe

// Example of a statically typed language (TypeScript)

let message = "hello"; // this is the string 
let count = 10; // this is the number

message = 100; // This would cause a type error in TypeScript but not in javascript 

// TypeScript enforces type safety at compile time, while JavaScript does not
