// if condition

/* 

if(condition) 
{
// statements
}

*/

//example 1 
// condition is : if the age is greater than 18 thenmessage " you are eligilbe to vote "

/* let age:number = 10;

if (age >= 18){
    console.log("You are eligible to vote");
} */

//example 2 if else condition 

/*  

if (condition)
{
    // statements if condition is true
}
else
{
    // statements if condition is false
}

*/

//example 2 

// this is the program to print if the number is even or odd

/* let number: number = 10;
if(number %2 ==0){
    console.log(`the number is even ${number}`);
}else{
    console.log("The number is odd");
} */


    // nested if else condition 

    /* 

if(condition1)
{

    // statements if condition1 is true 

}
else if(condition2)
{
    // statements if condition2 is true
}
else
{

    // statements if both conditions are false
}


    
    
    */

// example 3 

// this is the nested if else conditions 


/* let marks : number = 0;
if(marks >=90){
    console.log("You got A+ grade");
}else if(marks >=80 && marks <90){
    console.log("You got A grade");
}else if(marks >=70 && marks <80){
    console.log("You got B grade");
}else if(marks >=60 && marks <70){
    console.log("You got C grade"); 
} else if(marks >=50 && marks <60){
    console.log("You got D grade"); 
} else if(marks >=40 && marks <50){
    console.log("You got E grade"); 
} else if(marks <40){
    console.log("You are fail");
} else{
    console.log("Invalid marks");
}

 */

// nested if else condition with multiple conditions   // this is very importnat we use in automation 

// browser selection  using for automation important concept 

/* let browser : string = "firefox"; 

if(browser === "chrome"){
    console.log("You are using Chrome browser");
} else if (browser === "firefox"){
    console.log("You are using Firefox browser");
} else if (browser == "safari"){
    console.log("You are using Safari browser");
} else if (browser == "edge"){
    console.log("You are using Edge browser");
} else if (browser == "opera"){
    console.log("You are using Opera browser");
} else {
    console.log("Browser not supported");
}

 */

// switch case statement 

/* 

switch(expression) {
    case value1:
        // statements
        break;
    case value2:
        // statements
        break;
    default:
        // statements
}

*/


//example 

// depending on the value of the day , print the corresponding day of the week 

let day: number = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}


//same using for the browser selection 

let browser: string = "firefox"; 

switch (browser){
    case "chrome":
        console.log("You are using Chrome browser");
        break;
    case "firefox":
        console.log("You are using Firefox browser");
        break;
    case "safari":
        console.log("You are using Safari browser");
        break;
    case "edge":
        console.log("You are using Edge browser");
        break;
    case "opera":
        console.log("You are using Opera browser");
        break;
    default:
        console.log("Browser not supported");
}


// this is the end of the code 

let browser2: string = "chrome";
switch (browser2){
    case "chrome":
        console.log("You are using Chrome browser");
        break;

    case "firefox":
        console.log("You are using Firefox browser");
        break;

    case "safari":
        console.log("You are using Safari browser");
        break;

    case "edge":
        console.log("You are using Edge browser");
        break;

    case "opera":
        console.log("You are using Opera browser");
        break;

    default:
        console.log("Browser not supported");
        
}


//example 6  switch cases statement can also include an expression 

let x : number = 10, y:number = 290;
switch (x + y) {
    case 30:
        console.log("The sum is 30");
        break;
    case 40:
        console.log("The sum is 40");
        break;
    case 50:
        console.log("The sum is 50");
        break;
    default:
        console.log("The sum is not 30, 40 or 50");
}