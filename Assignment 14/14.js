// Q14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = ["Zeeshan", "Akif", "Naeem"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ":\n You are cordially invited to join us for a dinner\n"));
}
guestList.map(function (items) { return console.log("Dear ".concat(items, ":\n You are cordially invited to join us for a dinner\n")); });
