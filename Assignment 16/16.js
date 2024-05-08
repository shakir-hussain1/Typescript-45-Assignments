/* Q16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
var guestList = ["Zeeshan", "Akif", "Najeeb"];
console.log("Previous Guests List:");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ":\n You are invited to a dinner."));
}
console.log(" ");
guestList.map(function (items) { return console.log("\"Dear ".concat(items, ":\n I found a bigger dinner table so now I invited following three more guests to dinner.\"")); });
console.log("");
guestList.unshift("Zulfiqar");
guestList.splice(2, 0, "Akhlaq");
guestList.push("Kashif");
console.log("New guestst List:");
for (var j = 0; j < guestList.length; j++) {
    console.log("Dear ".concat(guestList[j], ":\n You are cordially invited to join us for a dinner."));
}
