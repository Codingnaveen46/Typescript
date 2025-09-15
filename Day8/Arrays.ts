// Arrays in typescript

/* 

An array is a specail type if variable that stores multipes values.

the values can be of the same data type or different types

arrays are declared using [] or generic array <t>

indexing starts from 0 

Arrays are an ordered collection of elements 

arrays are an ordered collection of elements 

*/


// Approach 1 using leteral 

let names :string[] = ["banana","apple","mango","cherrey"];



console.log(names[2]);


//Approach 2 using generic way with (Array)

let empName:Array<String> = ["JOHN", "SMITH","PETER"]
console.log(empName);


// to store both string and number 

let datas:Array<string | number> = [ "john" , 30];



// to store mixed type of data 

let mixedtypedata:Array<any> = [23, true, "tinghs"]


