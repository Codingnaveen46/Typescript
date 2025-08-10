// Increment ++
// Decrement --

let x : number = 10;
//x = x+1; // Increment by 1 
//x++// x = x - 1; // Decrement by 1    post increment 
// in post increment, the value is returned before incrementing
/* ++x; // x = x + 1; // Increment by 1    pre increment   
console.log(x); // 11  */

// this is for post increment 
/* let res:number = x++;
console.log(res); // 10 (post increment returns the value before incrementing) 
 */



/* let res : number = ++x ;
console.log(res); // 11 (pre increment returns the value after incrementing) */


// post decrement and pre decrement 

/* x--;// x = x - 1; // Decrement by 1    post decrement
console.log(x); // 9 (post decrement returns the value before decrementing)
 */
/* --x; // x = x - 1; // Decrement by 1    pre decrement

console.log(x); // 8 (pre decrement returns the value after decrementing)
 */

/* let res1:number = x--;
console.log(res1); // 10 (post decrement returns the value before decrementing)
console.log(x); // 9 (after decrementing)
 */

let res2:number = --x;
console.log(res2); // 8 (pre decrement returns the value after decrementing)
console.log(x); // 8 (after decrementing)