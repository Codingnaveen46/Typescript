//named function ; a function that is declared with a name 

/* 
syntax :

function functuionName(parameters) {
    // function body
    return value; // optional
}

*/


// to invoke the function, we can use the function name followed by parentheses

// functionName();

//named function without parameter and return value 

/* function display(){
    console.log("Hello, this is a named function!");
}

// invoking the function 
display(); */


//example 2 new function with name and return type 

/* function addNumbers (x:number,y:number,z:number) :number {
    
    return x + y +z;

}

// invoking the function

console.log(addNumbers(10,20,30)); // 60
 */


//named function with rest parameters 

function addNumbers(...numbers: number[]): number {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

// invoking the function
console.log(addNumbers(10, 20, 30,40,50,60)); // 60


function vs(num1: number, num2: number): number {
    if (num1 % num2 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }

    return (num1 + num2) / 2;  // average of num1 and num2
}

console.log(vs(34, 54));


// accepts any number of argument 

