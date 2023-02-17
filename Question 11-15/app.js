"use strict";
//Q11
//Names: Store the names of a few of your friends in a array called names. 
//Print each person’s name by accessing each element in the list, one at a time.
//code:
let firstNames = ["Waqar", "Ruwaifa", "Salman", "Khubaib"];
for (let i = 0; i < firstNames.length; i++) {
    console.log(firstNames[i]);
}
;
//Q12
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
//The text of each message should be the same, but each message should be personalized with the person’s name.
//code:
let friendsName = ["Waqar", "Ruwaifa", "Salman", "Khubaib"];
for (let i = 0; i < friendsName.length; i++) {
    console.log(`Hello, ${friendsName[i]}!`);
}
;
//Q13
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. 
//Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
//code:
let vehicleModes = ["Honda Motorcycle", "Tesla Model S", "BMW i8", "Yamaha R6"];
for (let i = 0; i < vehicleModes.length; i++) {
    console.log(`I would like to own a ${vehicleModes[i]}.`);
}
//Q14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.
//code:
let guestList = ["Albert Einstein", "Martin Luther King Jr.", "Malala Yousafzai"];
for (let i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + ", I would be honored to have you join me for dinner. It would be a great pleasure to share a conversation with you.");
}
;
console.log("Original guest list: " + guestList);
//Q15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
//code:
// Let's say Malala Yousafzai can't make it
let index = guestList.indexOf("Malala Yousafzai");
if (index > -1) {
    guestList.splice(index, 1);
}
// Adding new guest
guestList.push("Zia Khan");
console.log("New guest list: " + guestList);
for (let i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + ", I would be honored to have you join me for dinner. It would be a great pleasure to share a conversation with you.");
}
//let guestList = ["Albert Einstein", "Martin Luther King Jr.", "Malala Yousafzai"];
console.log("Original guest list: " + guestList);
// Let's say Malala Yousafzai can't make it
//slet index = guestList.indexOf("Malala Yousafzai");
if (index > -1) {
    let removedGuest = guestList.splice(index, 1);
    console.log(`${removedGuest} can not make it`);
}
// Adding new guest
guestList.push("Marie Curie");
console.log("New guest list: " + guestList);
for (let i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + ", I would be honored to have you join me for dinner. It would be a great pleasure to share a conversation with you.");
}
//let index = guestList.indexOf("Malala Yousafzai");
if (index > -1) {
    guestList[index] = "Marie Curie";
}
console.log("New guest list: " + guestList);
for (let i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + ", I would be honored to have you join me for dinner. It would be a great pleasure to share a conversation with you.");
}
let guestList1 = ["Albert Einstein", "Martin Luther King Jr.", "Marie Curie"];
console.log("Guest list: " + guestList1);
console.log("First Set of Invitations: ");
for (let i = 0; i < guestList1.length; i++) {
    console.log("Dear " + guestList1[i] + ", I would be honored to have you join me for dinner. It would be a great pleasure to share a conversation with you.");
}
console.log("Second Set of Invitations: ");
for (let i = 0; i < guestList1.length; i++) {
    console.log("Dear " + guestList1[i] + ", I hope you are still able to make it to dinner. I look forward to hosting you.");
}
;
