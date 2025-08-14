//while loop 

//1 Write a program to calculate the sum of the first 10 natural numbers using a while loop. 

let sum:number= 0;
let count:number = 1; 

while(count <= 10) {
    sum += count; // sum = sum + count
    count++;
}
console.log("The sum of the first 10 natural numbers is: " + sum);



//2 Write a program to print the multiplication table of 5 using a while loop.
let multiplier:number = 1;
let numberToMultiply:number = 5;
while(multiplier <= 10) {
    console.log(`${numberToMultiply} x ${multiplier} = ${numberToMultiply * multiplier}`);
    multiplier++;
}


//3 Write a program to find the factorial of a number (e.g., 5) using a while loop.

let numberToFactorial:number = 5;
let factorial:number = 1;
let i:number = 1;
while(i <= numberToFactorial) {
    factorial *= i; // factorial = factorial * i
    i++;
}
console.log(`The factorial of ${numberToFactorial} is: ${factorial}`);

// 4 Write a program to reverse a number (e.g., 12345) using a while loop.
let numberToReverse:number = 12345;
let reversedNumber:number = 0;
while(numberToReverse > 0) {
    let digit:number = numberToReverse % 10; // Get the last digit
    reversedNumber = reversedNumber * 10 + digit; // Build the reversed number
    numberToReverse = Math.floor(numberToReverse / 10); // Remove the last digit
}
console.log(`The reversed number is: ${reversedNumber}`);

