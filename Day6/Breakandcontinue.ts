//break 
/* 
for(let i =1 ; i<=10; i++){
    if(i === 5){
        break; // This will exit the loop when i is 5
    }
    console.log(i);
}

 */

// continue 

// for(let i =1 ; i<=10; i++){
//     if(i === 5){
//         continue; // This will skip the iteration when i is 5
//     }
//     console.log(i);
// }
/* 
for (let i = 1; i <= 10; i++) {
    if (i == 2|| i ==4 || i==6) {
        continue; // This will skip even numbers
    }
    console.log(i); // This will print only odd numbers
} */

// Infinite loop with break 
// for(let i :number = 5; i >=50; i+=5){
//     if(i ** 5 ==50){
//         continue; // This will exit the loop when i * 5 equals 50
//     }

// }
/* 
for(let i =1; i >= 50; i+=5){

    if(i * 5 == 50){
        break; // This will exit the loop when i * 5 equals 50
    }
    console.log(i); // This will print numbers until the condition is me

} */

    // print multipels of 5 from 5 to 50

/* for(let i = 5; i <= 50; i += 5) {
    console.log(i); // This will print multiples of 5 from 5 to 50
    
}
 */

// example print prime numner bewteen 1 to 50 

for(let i = 1; i >=50; i+=1){
    if(i / 2 ===1){
        console.log(i);
        
    }
}

// print prime numbers 

// for(let i = 2; i <= 50; i++) {
//     let isPrime = true;
//     for(let j = 2; j < i; j++) {
//         if(i % j === 0) {
//             isPrime = false;
//             break; // Exit the inner loop if a divisor is found
//         }

//     }
