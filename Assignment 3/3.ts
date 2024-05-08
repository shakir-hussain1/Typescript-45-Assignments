// Q3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "sHaKiR hUsSaIn";

// lowercase output shakir hussain
console.log(personName.toLowerCase()); 

// uppercase output SHAKIR HUSSAIN
console.log(personName.toUpperCase()); 

// methode 1:  tilecase output Shakir Hussain
let nameTC: string[] = personName.split(" ");
let titleCaseName: string = ""
for(let i = 0; i < nameTC.length; i++)
{titleCaseName += nameTC[i].charAt(0).toUpperCase() + nameTC[i].slice(1).toLowerCase() + " "}
console.log(titleCaseName);
// methode 2: titlecase output Shakir Hussain
personName="shakir hussain"
console.log(personName.replace(/\b\w/g,c=>c.toUpperCase()))