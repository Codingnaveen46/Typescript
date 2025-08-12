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

