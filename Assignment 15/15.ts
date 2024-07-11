#! /usr/bin/env node
/*Q15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/

let guestList : string[] = ["Zeeshan", "Akif", "Naeem"];
guestList.map((items) => console.log(`Dear ${items}: You are cordially invited to a dinner.`));
console.log(" ");

console.log(guestList[2] + " " + 'can not join us due to some urgency.\n');

guestList.pop();

guestList.push("Najeeb");

console.log("New list of invitation:");

for (let i=0; i<guestList.length; i++) {
    console.log(`Dear ${guestList[i]}: You are invited to a dinner.`);    
}