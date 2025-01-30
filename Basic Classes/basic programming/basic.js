// let a = Number(prompt("enter a"));
// let b =parseInt(prompt("enter b"));
// console.log(`sum of ${a} & ${b} is ${a+b}`);
// console.log("sum of "+a+" and "+b+ " is " +(a+b));



// let name=prompt("enter name");
// let age = Number(prompt("enter age"));
// console.log(`Hello ${name}, you are ${age} years old.`);


// let length = parseFloat(prompt("Enter the length"));
// let width = parseFloat(prompt("Enter the width"));
// let area = parseFloat(length * width);
// let perimeter = 2 * ( length + width);
// console.log(`The area of the rectangle is ${area} square units.`);
// console.log(`The perimeter of the rectangle is ${perimeter} units.`);


// Math.floor;
// Math.round;
// Math.ceil;


// Greatest between two 
// let a = 10;
// let b = 20;
// // console.log(Math.max(a,b));
// if(a>b){
//     console.log(`${a} is greater than ${b}`);
// }
// else{
//     console.log(`${b} is greater than ${a}`);
//     }


// Even or odd 
// let num = 10;
// if(num%2==0){
//     console.log(`${num} is even`);}
// else{
//         console.log(`${num} is odd`);
// }


// prime or not .
// let num = 11;
// if(num>1){
//     for(let i=2;i<num;i++){
//         if(num%i==0){
//             console.log(`${num} is not a prime number`
//                 break;
//                 }
//                 }
//                 else{
//                     console.log(`${num} is a prime number`
//                         }
//                         }
//                         else{
//                             console.log(`${num} is not a prime number`
//                                 }
//                                 }

// let number = 12;
// let isPrime = true;
// if (number > 1){

//     for (let i = 2; i < number/2; i++) {
//         if (number % i === 0) {
//             isPrime = false;
//             break;
//             }
//             }
//             if (isPrime) {
//                 console.log(`${number} is a prime number`);
//                 } else {
//                     console.log(`${number} is not a prime number`);
//                         }
// }
// else{
//     console.log(`${number} is not a prime number`);
//         }
     


// factor of any number 
// let num = 10;
// let factors = [];
// for (let i = 1; i <= num/2; i++) {
//     if (num % i === 0) {
//         factors.push(i);
//         }
//         }
//         factors.push(num);
//         console.log(factors);




// valid voter
// Process.stdout.write("Enter your name");
// process.stdin
// let age = 17;
// let name = "yash";
// let isVoter = (age >= 18) ? `Hello ${name}, you are a voter.`
// : `Hello ${name}, you will be eligible to vote in ${18-age} years`;
// console.log(isVoter);




// weekday
// let day = 9;
// let dayOfWeek = ((day ===1) ? "Monday" : (day === 2) ? "Tuesday" :
// (day === 3) ? "Wednesday" : (day === 4) ? "Thursday" :
//  (day === 5) ? "Friday" : (day === 6) ? "Saturday" : (day === 7) ? "Sunday" :  "wrong input");
// console.log(dayOfWeek);




// shop discount
// let price = 10000;
// let discount;
// if (price < 5000) {
//     discount = 0;
// }
// else if (price >= 5000 && price < 7000) {
//     discount = 5;
// }
// else if (price >= 7000 && price < 9000 ){
//     discount = 10;
// }
// else if(price >= 9000){
//     discount = 20;
    
// }
// console.log(`payable amount is ${price - (price * discount)/100}`);




// Electricity bill
// let unit = 970;
// let rate ;
// let amount = 0;

// if(unit > 400){
//     rate = 13;
//     amount += (unit - 400) * rate;
//     unit = 400;
// }
// if(unit<= 400 && unit > 200){
//     rate = 8;
//     amount += (unit - 200) * rate;
//     unit = 200;
// }
// if(unit <= 200 && unit > 100){
//     rate = 6;
//     amount += (unit - 100) * rate;
//     unit = 100;
// }
// amount += unit * 4.2;
// // if(unit <= 100 && unit > 0){
// //     rate = 4.2;
// // }
// console.log(`your bill is ${amount}`);




// n time hello world 
// let n = 5;
// for (let i = 0; i < n; i++) {
//     console.log("hello world");
// }

// n natural number 
// let n = 10;
// let s = "";
// for (let i = 1; i <= n; i++) {
//     s += i + " ";
// }
// console.log(s);


// sum of first n Number
// let n = 10;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum += i;
//     }
// console.log(sum);
    

// factorial of  a Number
// let n = 15;
// let fact = 1;
// for (let i = 1; i <= n; i++) {
//     fact *= i;
//     }
//     console.log(fact);


// Reverse the number 
// let n = 1234;
// let rev = 0;
// while (n != 0) {
//     let rem = n % 10;
//     rev = rev * 10 + rem;
//     n = Math.floor(n / 10);
// }
// console.log(rev);


// palindrome Number
// let n = 121;
// let rev = 0;
// let org = n;
// while (n != 0) {
//     let rem = n % 10;
//     rev = rev * 10 + rem;
//     n = Math.floor(n / 10);
//     }
//     if (org == rev) {
//         console.log(`${n} is a palindrome`);
//         } else {
//             console.log(`${n} is not palindrome`);
//             }

// let s = "exea";
// let start = 0;
// let end = s.length -1;
// while( start < end){
//     let temp = s[start];
//     s[start] = s[end];
//     s[end] = temp;
//     if(s[start] != s[end]){
//         console.log("Not a palindrome");
//         break;
//         }
        
//         else{
//             console.log("Palindrome");
//             }
        
//     start++;
//     end--;
// }


// strong number 
// let n = 145;
// let sum = 0;
// let temp = n;
// while (temp != 0) {
//     let rem = temp % 10;
//     let fact = 1;
//     for (let i = 1; i <= rem; i++) {
//         fact *= i;
//         }
//         sum += fact;
//         temp = Math.floor(temp / 10);
//     }
// if (n == sum) {
//     console.log(`${n} is a strong number`);}
// else {
//     console.log(`${n} is not a strong number`);
//     }



// automorphic Number 
// let n = 625;
// let copy = n;
// let square = n * n;
// count = 0;
// while(copy>0){
//     count++;
//     copy =  Math.floor(copy /10);
// }
// if(n == square % Math.pow(10, count)){
//     console.log(`${n} is an automorphic number`);
//     }
// else{
//     console.log(`${n} is not an automorphic number`);
//     }
                



// single digit 
// let n = 6758;
// let sum=0;
// while(n>0 || sum>9){
//     if (n==0){
//         n= sum;
//         sum = 0;
//     }
//     sum += n % 10;
//     n = Math.floor(n / 10);
// }
// console.log(sum);




// fibonacci series 
// let n = 10;
// let a = 0, b = 1;
// let count = 0;
// while(count < n){
//     console.log(a);
//     let temp = a;
