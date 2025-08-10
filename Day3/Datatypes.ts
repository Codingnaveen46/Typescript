/* 

1 primitive data types(buit in types )

- number
- string
- boolean
- null
- undefined
- symbol
- bigint
- any
- void
- never
- union type


2 non primitive data types (user defined types) (objects)

-Array
-class 
-functions
-interface
- tuple

*/


// Primitive data types
// number :  number type is represented by the number type in TypeScript. It can represent both integer and floating-point numbers.
/* 
let age: number = 25; // integer
let price: number = 19.99; // floating-point number
let big = 1000000000000n; // bigint (ES2020 feature)

console.log(`Age: ${age}, Price: ${price}, Big Number: ${big}`);
 */
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// string: The string type is used to represent text data. It can be enclosed in single quotes, double quotes, or backticks (template literals).
// string represent the textual data 

/* 
1 single quotes ('')
2 double quotes ("")
3 backticks (` `) - template literals, allows for multi-line strings and string interpolation
 */


/* let firstName:string = "John";
let lastName:string = 'Doe';

let greeting:string = `Hello, ${firstName} ${lastName}!`;
console.log(greeting); // Output: Hello, John Doe! */

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// boolean: The boolean type represents a logical value that can either be true or false. 

/* 
let isStudent: boolean = true;
let isGraduated: boolean = false;
console.log(`Is Student: ${isStudent} Is Graduated: ${isGraduated}`); // Output: Is Student: true, Is Graduated: false */

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// null: & undefined  The null type represents the intentional absence of any object value. It is often used to indicate that a variable has no value or is empty. 
//it is the special type for the absence of the  value 

/* let emptyValue: null = null;

let notDefined: undefined = undefined;

console.log(`Empty Value: ${emptyValue}, Not Defined: ${notDefined}`); // Output: Empty Value: null, Not Defined: undefined


let price:number;
// price is declared but not initialized, so it is undefined
console.log(price);
 */


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Any type 
// The any type is a special type that allows you to assign any value to a variable. It effectively disables type checking for that variable, making it flexible but potentially unsafe.

/* 

let value:any 40;              // in this case no typesafty 
value = "Hello"; // can be a string
value = true; // can be a boolean
value = { name: "John" }; // can be an object
console.log(`Value: ${value}`); // Output: Value: [object Object] (if it's an object)

*/

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// union type combine multiple types into a single type. It allows a variable to hold values of different types, providing flexibility while maintaining type safety.

/* let value: number | string | boolean;
value = 42; // number
value = "Hello"; // string
value = true; // boolean

console.log(`Value: ${value}`); // Output: Value: true (if the last assignment was boolean)
 */


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// void: The void type is used to indicate that a function does not return a value. It is often used as the return type for functions that perform an action but do not produce a result.

// used for functions that do not return a value 


function logMessage(message: string): void {
    console.log(message);
}

logMessage("This is a message."); // Output: This is a message.


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

function sumof(x: number, y: number): number {
    return x + y;

}


let res:number = sumof(12,12);

console.log(`sum of 12 and 12 is : ${res}`);
