/*43. Unchanged Magicians: Start with your work from Exercise 42. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.*/
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push("The Great" + " " + magicians[i]);
    }
    return greatMagicians;
}
var magicians = ["Criss Angel", "Davis Dopperfield", "Harry Houdini"];
var greatMagicians = make_great(magicians);
show_magicians(magicians);
show_magicians(greatMagicians);
