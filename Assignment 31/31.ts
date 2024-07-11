#! /usr/bin/env node
/*31. No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/

//Users
let userNames: string[] = ["Admin","Ahmad","Mohammad","Ali","Mustafa"]
console.log(`Users: ${userNames}`)

//No Users
userNames.pop()
userNames.pop()
userNames.pop()
userNames.pop()
userNames.pop()
console.log(`No Users: ${userNames}`)
if(userNames.length === 0) {
    console.log(`We need to find some users!`)
}
