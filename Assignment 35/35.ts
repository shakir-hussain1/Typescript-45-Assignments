/*35. Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to
print out the name of each animal.
• Modify your program to print a statement about each animal, such as
A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in
common. You could print a sentence such as Any of these animals would
make a great pet!*/

let animals:string[]=["Goat","Cow","Buffalo"]
for(let i=0; i<animals.length; i++) {
    console.log(`"${animals[i]}"`)
}
console.log("\n")

for(let i=0; i<animals.length; i++) {
    console.log(`${animals[i]} gives milk which we use to drink and for making tea etc`)
}
console.log("\n")

console.log("All of those pet animals give their sacrifices too for us in Eid ul Azha!")