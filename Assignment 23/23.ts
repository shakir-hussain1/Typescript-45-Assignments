#! /usr/bin/env node
/*23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this: 
let car = 'subaru'; 
console.log("Is car == 'subaru'? I predict True.") 
console.log(car == 'subaru') 
• Look closely at your results, and make sure you understand why each line evaluates to True or False. 
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/

// 5 tests evaluation of true
let car: string = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

let car1 = 'automatic';
console.log("Is car == 'automatic'? I predict True.")
console.log(car1 == 'automatic')

let car2 = '1000 cc';
console.log("Is car2 == '1000 cc'? I predict True.")
console.log(car2 == '1000 cc')

let car3 = 'red';
console.log("Is car == 'red'? I predict True.")
console.log(car3 == 'red')

let car4 = 'imported';
console.log("Is car == 'imported'? I predict True.")
console.log(car4 == 'imported')

// 5 tests evaluation of false
let x:number=10, y:number=20;
console.log("Is x > y? I predict False.")
console.log(x>y)

let age = 17;
console.log("Is age > 18? I predict False.")
console.log(age > 18)

let hour = 9;
console.log("Is hour > 12? I predict False.")
console.log(hour > 9)

let weather = "cloudy";
console.log("Is weather ==  'sunny'? I predict False.")
console.log(weather == 'sunny')

let monday = "working day";
console.log("Is monday == 'off'? I predict False.")
console.log(monday == 'off')