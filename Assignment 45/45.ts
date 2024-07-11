#! /usr/bin/env node
/*45. Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a
color or an optional feature. 
Print the Object that’s returned to make sure all the information was
stored correctly.*/

type objCar = {manufacturer: string, model: string, [key: string]: any}
function orderCar(manufacturer:string, model:string, optional: Record<string,any>): objCar {
    return {manufacturer, model, ...optional}
}
let myCar: objCar = orderCar("Suzuki", "Alto", {color:"Blue", year:"2024"})
console.log(myCar)