// Q3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName = "shakiR hussaiN";
// lowercase output shakir hussain
console.log(personName.toLowerCase()); 
// uppercase output SHAKIR HUSSAIN
console.log(personName.toUpperCase()); 
// methode 1: titlecase output Shakir Hussain
let nameTC1 = personName.split(" ");
let nameTC2 = nameTC1.map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
let nameTC3 = nameTC2.join(" ")
console.log(nameTC3);
// methode 2: titlecase output Shakir Hussain
let nameTC = personName.split(" ")
let titleCaseName = ""
for(let i = 0; i < nameTC.length; i++)
{titleCaseName += nameTC[i].charAt(0).toUpperCase() + nameTC[i].slice(1).toLowerCase() + " "}
console.log(titleCaseName)
// methode 3: titlecase output Shakir Hussain
personName="shakir hussain"
console.log(personName.replace(/\b\w/g,c=>c.toUpperCase()))