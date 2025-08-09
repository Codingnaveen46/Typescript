//variable : a named storage location in memory or a program that can hold a value. or container which can hold or store data 

// specifiying data type in javascript is optional, but it is a good practice to do so for better code readability and maintainability.

// variable declaration 
// var , let, const 

//syntax :  keyword variableName : dataType = value;

// example : var age:number = 25;  with data type
// example : var age = 25; without data type  

/* var age: number = 25; // variable with data type
console.log(age);
 */

// var vs let vs const 
//--------------------------------------------------

/*  1 Scope of the variable
    2 Declaration /value assignment 
    3 Re-declaration
    4 Re-initialization / Re-assignment
    5 Hoisting 
 */

    // var - we dont use this in modern javascript and typescript . avoid using var it has function scope and can be re-declared and re-initialized.
    // let - block scope, can be re-initialized but not re-declared in the same scope.  use let when you need a variable that can change its value within a block.
    // const - block scope, cannot be re-initialized or re-declared in the same scope. use const when the variable value should not change 

    // scope - accessible area (functional scope and block scope) which we have in js/ts
    // Functional scope :  var is function scoped, meaning it is accessible within the function it is declared in.

    // Block scope : let and const are block scoped, meaning they are accessible only within the block they are declared in (e.g., inside an if statement, loop, etc.). 

    // example for scope 1 
//--------------------------------------------------------------------------
/*     function varScoped(){
        if (true){
            var x = 10; // function scoped
            console.log("Inside if block, var x:", x); // 10
        }

        console.log("Outside if block, var x:", x); // 10, still accessible

    }

    varScoped();
 */

//example for scope 2 for let and const blocked scope   

/* function blockedScope(){

    if(true){
        let msg = "hello world"; // block scoped
        const greet = "hi"; // block scoped

        console.log("Inside if block, msg:", msg); // hello world    // only this can be accessed inside the block 
        console.log("Inside if block, greet:", greet); // hi
    }

    // console.log("Outside if block, msg:", msg); // Error: msg is not defined
    // console.log("Outside if block, greet:", greet); // Error: greet is not defined    // this will throw an error because msg and greet are block scoped variables and cannot be accessed outside the if block. 
}

blockedScope(); */


/* for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 100);
} */


/* function outer() {
    let outerVar = 'I am outer';
    function inner() {
        console.log(outerVar);
    }
    inner();
}
outer();
 */


// 2 declaration and // value assignment 
//--------------------------------------------------------------------------
// example 1 :  var can be declared  without initialization.

/* var x; // declaration  
x = 5; // variable declaration without initialization
console.log(x);  // Output: undefined, because x is declared but not initialized  */

// example 2 : let and const cannot be declared without initialization.

/* let y; // Error: Cannot use 'let' before initialization
console.log(y); // Output: undefined, because y is declared but not initialized
 y = 10; // declaration and initialization
console.log(y); // Output: 10 */


// example 3 : const must be initialized at the time of declaration

//const z ; // Error: Missing initializer in const declaration    // const must be initlized at the time of declaration 
/* const z = 15; // declaration and initialization
console.log(z); // Output: undefined, because z is declared but not initialized */
/// z = 15; // Error: Assignment to constant variable, because z is a constant and cannot be re-initialized 


// 3  Redeclration 
//--------------------------------------------------------------------------
// var allows redeclaration, let and const do not allow redeclaration in the same scope.
// let and const will throw an error if you try to redeclare them in the same scope. 

/* var city = "New York"; // declaration and initialization
var city = "Los Angeles"; // redeclaration and re-initialization 

console.log(city); // Output: Los Angeles, because var allows redeclaration and re-initialization
 */


// let is not allowed to redeclare in the same scope

/* let country = "USA"; // declaration and initialization
let country = "Canada"; // Error: Identifier 'country' has already been declared
// console.log(country); // Output: Canada, because let does not allow redeclaration in the same scope */



/* // const is not allowed to redeclare in the same scope

const language = "JavaScript"; // declaration and initialization
const language = "TypeScript"; // Error: Identifier 'language' has already been declared

console.log(language); // Output: TypeScript, because const does not allow redeclaration in the same scope
 */

// 4 Re-initialization / Re-assignment 
//--------------------------------------------------------------------------
// by using var and let we can re-assignment allowd 
// by using const we cannot re-assignment allowed

//example 1  var allows re-assignment

/* var age = 25; // declaration and initialization
age = 30; // re-assignment

console.log(age); // Output: 30, because var allows re-assignment
 */

//example 2 let allows re-assignment
/* let score = 100; // declaration and initialization
score = 200; // re-assignment
console.log(score); // Output: 200, because let allows re-assignment
 */


//example 3 const does not allow re-assignment

const pi = 3.14; // declaration and initialization
//pi = 3.14159; // Error: Assignment to constant variable, because const does not allow re-assignment

// console.log(pi); // Output: 3.14, because const does not allow re-assignment 

// 5 Hoisting
//-------------------------------------------------------------------------------------------------

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase.

// In JavaScript, variables declared with var are hoisted to the top of their functional or global scope, while let and const are not hoisted in the same way.

// Example of hoisting with var
/* console.log(a); // Output: undefined, because var is hoisted
var a = 10; // declaration and initialization
console.log(a); // Output: 10, because a is initialized after the first console.log 

 */


// Example of hoisting with let and const
//console.log(b); // Error: Cannot access 'b' before initialization, because let is not hoisted in the same way as var
/* let b = 20; // declaration and initialization
console.log(b); // Output: 20, because b is initialized after the first console.log
 */


// console.log(c); // Error: Cannot access 'c' before initialization, because const is not hoisted in the same way as var
/* const c = 30; // declaration and initialization
console.log(c); // Output: 30, because c is initialized after the first console.log
 */

// Summary:
// - Use var for function-scoped variables that can be re-declared and re-initialized.
// - Use let for block-scoped variables that can be re-initialized but not re-declared in the same scope.
// - Use const for block-scoped variables that cannot be re-initialized or re-declared in the same scope.
// - Be cautious with hoisting, especially with let and const, as they are not hoisted in the same way as var.
// - Always prefer let and const over var for better code readability and maintainability.
// - Use descriptive variable names to improve code readability.
// - Avoid using global variables to prevent naming conflicts and unintended side effects.
// - Use const for variables that should not change, and let for variables that may change. 
// - Use camelCase for variable names to follow JavaScript naming conventions.
// - Use meaningful variable names that describe the purpose of the variable.
// - Use comments to explain complex logic or important details about the variable.
// - Keep variable declarations close to their usage to improve code readability.
// - Use destructuring assignment for objects and arrays to extract values into variables.
// - Use template literals for string interpolation to improve code readability.
// - Use const for function expressions and arrow functions that do not change.

