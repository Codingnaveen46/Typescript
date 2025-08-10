//---------------- Airthmetic operators ---------------------

let a: number = 10, b: number = 20;

// Addition
let sum: number = a + b;
// Subtraction
let difference: number = a - b;
// Multiplication
let product: number = a * b;
// Division
let quotient: number = a / b;
// Modulus
let remainder: number = a % b;
// Exponentiation
let power: number = a ** 2; // a raised to the power of 2

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
console.log(`Product: ${product}`);
console.log(`Quotient: ${quotient}`);
console.log(`Remainder: ${remainder}`);
console.log(`Power: ${power}`);


//-----------// Assignment operators--------------------------


let c:number = 10, d:number = 20;

// Assignment
console.log(c+= d); // c = c + d
console.log(c-= d); // c = c - d
console.log(c*= d); // c = c * d
console.log(c/= d); // c = c / d
console.log(c%= d); // c = c % d


// Relational operators 
// Returns boolean - true / false 

console.log(`********** Relational Operators **********`);

a = 10;
b = 20;

console.log(a < b);  // Less than  
console.log(a > b);  // Greater than
console.log(a <= b); // Less than or equal to
console.log(a >= b); // Greater than or equal to
console.log(a == b); // Equal to
console.log(a != b); // Not equal to

// Difference between == and === 
console.log(a == b);  // Loose equality (type coercion allowed) 
console.log(a === b); // Strict equality (no type coercion) 

let num1:any = 10;
let num2:any = "10";

console.log(num1 != num2);  // true (type coercion) 



//// Logical operators 



// && || ! 

// b1        b2       &&    ||     ! 
// true     true     true   true  false
// true     false    false  true
// false    true     false  true  true
// false    false    false  false

console.log(`********** Logical Operators **********`);

let b1: boolean = true;
let b2: boolean = false; 

console.log(b1 && b2); // false
console.log(b1 || b2); // true
console.log(!b1);      // false
console.log(!b2);      // true

// combination of logical and relational operators

console.log(`********** Combination of Logical and Relational Operators **********`);

console.log(20>10 && 10>5); // true
console.log(20<10 || 10>5); // true

