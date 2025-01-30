// foundation questions
// 1
// console.log("heiii");
let height =10;
let width = 15;
const perimeter = (height, width) => 2*(height + width);
console.log(`Perimeter of the rectangle is ${perimeter(height,width)}`);


let kmph = 50;
let mph = kmph * 0.621371;
console.log(`speed in MPH is ${mph.toFixed(3)}`);


let totalmins = 150;
let hrs = Math.floor(totalmins/60);
let mins = totalmins%60;
console.log(`Total time: ${hrs} hours and ${mins} minutes`);


let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}



let marks = [82, 96, 88, 93]; // Math, Science, English, Hindi
let totalMarks = marks.reduce((a, b) => a + b, 0);
let percentage = (totalMarks / (marks.length * 100)) * 100;

if (percentage >= 75) {
    console.log("Grade: A");
} else if (percentage >= 55) {
    console.log("Grade: B");
} else if (percentage >= 45) {
    console.log("Grade: C");
} else if (percentage >= 35) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}



let char = 'A';
if ('AEIOUaeiou'.includes(char)) {
    console.log("Vowel");
} else {
    console.log("Consonant");
}


let num = 12;
let factorsum = 0;
for (let i=1; i<= num; i++){
    if(num % i === 0){
        factorsum += i;
    }
}
console.log(`sum of Factors: ${factorsum}`);



let base = 2, exponent = 4;
let power = Math.pow(base, exponent);
console.log(`${base} raised to the power of ${exponent} is ${power}`);



n = 10;
let evenSum = 0, oddSum = 0;
for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        evenSum += i;
    } else {
        oddSum += i;
    }
}
console.log(`Sum of even numbers up to ${n}: ${evenSum}`);
console.log(`Sum of odd numbers up to ${n}: ${oddSum}`);



let srange = 10;
let erange = 50;
let primes = [];
for (let i=srange; i<=erange; i++){

}













