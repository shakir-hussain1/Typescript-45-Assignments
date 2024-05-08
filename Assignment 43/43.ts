/*43. Unchanged Magicians: Start with your work from Exercise 42. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.*/

function show_magicians(magicians:string[]): void {
    for (let magician of magicians) {
        console.log(magician)
    }
}

function make_great(magicians:string[]): string[] {
    let greatMagicians:string[]=[]
    for(let i=0; i<magicians.length; i++) {
        greatMagicians.push("The Great" + " " + magicians[i])
}
return greatMagicians
}


let magicians: string[] = ["Criss Angel", "Davis Dopperfield", "Harry Houdini"]
let greatMagicians:string[] = make_great(magicians)
show_magicians(magicians)
show_magicians(greatMagicians)

