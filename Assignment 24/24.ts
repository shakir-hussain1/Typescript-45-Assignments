#! /usr/bin/env node
/*24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/ 

// task1: string tests for = and != 
let cityName: string = "Multan"
let city_name: string = "Lahore"
let city_Name: string = "Islamabad"
if(cityName.length == city_name.length) {
    console.log("no of characters of both cities are equal i.e 6 == 6")
    console.log("Multan:" + cityName.length)
    console.log("Lahore:" + city_name.length)
}
else {
    console.log("inequal.")
};

if(cityName.length != city_Name.length) {
    console.log("no of characters of both cities are inequal i.e 6 != 9")
    console.log("Multan:" + cityName.length)
    console.log("Islamabad:" + city_Name.length)
}
else {
    console.log("equal.")
};

//task2: lower case function tests
let countryName:string = "pakistan"
let country_Name:string = "america"
if(countryName != country_Name) {
    console.log("both country names are different but both written in lower case i.e pakistan and america")
}
else {
    console.log("equal.")
};

//task3: numerical tests for =, !=, >, <, >= and <= 
let num1: number = 10
let num2: number = 20
let num3: number = 10
//equality
if(num1 == num3) {
    console.log("both numbers are equal i.e 10 == 10")
}
else {
    console.log("inequal.")
};
//inequality
if(num1 != num2) {
    console.log("both numbers are inequal i.e 10 != 20")
} 
else {
    console.log("equal.")
};
//greater than
if(num2 > num1) {
    console.log("first number is > second number i.e 20 > 10")
}
else {
    console.log("less than")
}; 
//less than
if(num3 < num2) {
    console.log("first number is < second number i.e 10 < 20")
}
else {
    console.log("greater than")
}; 
//greater than or equal to
if(num1 >= num3) {
    console.log("first number is >= second number i.e 10 >= 10")
}
else {
    console.log("less than or equal to")
}; 
//less than or equal to
if(num3 <= num1) {
    console.log("first number is <= second number i.e 10 <= 10")
}
else {
    console.log("greater than or equal to")
}; 

//task4: tests using && and || operators 
let personAge1: number = 18
let personAge2: number = 17
let personAge3: number = 19
//&& operator
if(personAge3 > 18 && personAge1 >= 18) {
    console.log("You are eligible for vote casting")
} 
else {
    console.log("ineligible")
}; 
//|| operator 
if(personAge2 > 18 || personAge1 >= 18) {
    console.log("You are eligible for driving license")
}
else {
    console.log("ineligible")
};

//task5: test whether an item in an array 
let sports: string[] = ["Cricket", "Football", "Hockey", "Squash", "Badminton"]
console.log("Cricket is in a array, " + sports.includes("Cricket"))

// //task6: test whether an item is not in an array 
let food: string[] = ["Biryani", "Qorma", "Haleem", "Tikka", "Malai Boti"]
console.log("Nihari is not in a array, " + !food.includes("Nihari"))
