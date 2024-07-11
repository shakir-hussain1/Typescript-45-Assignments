#! /usr/bin/env node
/*39. City Names: Write a function called city_country() that takes in the name
of a city and its country. The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value
that’s returned.*/

function city_country(city:string, country:string): string{
    return `\n"${city} , ${country}"\n`
}
console.log(city_country("Karachi", "Pakistan"))
console.log(city_country("Washington", "America"))
console.log(city_country("Montreal", "Canada"))
