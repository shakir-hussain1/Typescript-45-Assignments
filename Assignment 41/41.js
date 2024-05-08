/*41. Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.*/
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1);
    }
}
var magician = ["Famous Magicians:\n1:Criss Angel", "2:Davis Dopperfield", "3:Harry Houdini"];
show_magicians(magician);
