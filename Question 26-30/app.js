"use strict";
//Q26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
//code:
// Alien Colors #2:
// Running if block version:
let alien_color = 'green';
if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
;
//Running else block version:
alien_color = 'yellow';
if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
;
//Q27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
//code:
//Alien Colors #3:
//Green version:
alien_color = 'green';
if (alien_color === 'green') {
    console.log("The player earned 5 points.");
}
else if (alien_color === 'yellow') {
    console.log("The player earned 10 points.");
}
else if (alien_color === 'red') {
    console.log("The player earned 15 points.");
}
;
//Yellow version:    
alien_color = 'yellow';
if (alien_color === 'green') {
    console.log("The player earned 5 points.");
}
else if (alien_color === 'yellow') {
    console.log("The player earned 10 points.");
}
else if (alien_color === 'red') {
    console.log("The player earned 15 points.");
}
;
//Red version:
alien_color = 'red';
if (alien_color === 'green') {
    console.log("The player earned 5 points.");
}
else if (alien_color === 'yellow') {
    console.log("The player earned 10 points.");
}
else if (alien_color === 'red') {
    console.log("The player earned 15 points.");
}
;
//Q28
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
//code:
let age = 17;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//Q29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
//code:
let favorite_fruits = ["apple", "banana", "mango"];
if (favorite_fruits.indexOf("apple") !== -1) {
    console.log("You really like apples!");
}
if (favorite_fruits.indexOf("banana") !== -1) {
    console.log("You really like bananas!");
}
if (favorite_fruits.indexOf("mango") !== -1) {
    console.log("You really like mangoes!");
}
if (favorite_fruits.indexOf("orange") !== -1) {
    console.log("You really like oranges!");
}
if (favorite_fruits.indexOf("grapes") !== -1) {
    console.log("You really like grapes!");
}
;
//Q30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
//code:
let users = ["admin", "Eric", "Amy", "John", "Sara"];
for (let i = 0; i < users.length; i++) {
    if (users[i] === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${users[i]}, thank you for logging in again.`);
    }
}
;
