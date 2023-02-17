"use strict";
//Q21
const car = {
    make: "Honda",
    model: "Civic",
    year: 2022,
    color: "black",
    hasSunroof: true,
};
// Print the object
console.log(car);
//Q22
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
//Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
//code:
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[3]); // This will cause an "IndexError: Array index out of range"
let freshFruits = ["Apple", "Banana", "Cherry"];
// Checking the index before trying to access it
if (3 < fruits.length) {
    console.log(fruits[3]);
}
else {
    console.log("Index out of range");
}
//Q23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//code:
let newCar = "subaru";
console.log("Is car_ == 'subaru'? I predict True.");
console.log(newCar == "subaru");
console.log("Is car_ == 'toyota'? I predict False.");
console.log(newCar == "toyota");
console.log("Is car_ === 'subaru'? I predict True.");
console.log(newCar === "subaru");
console.log("Is car_ != 'toyota'? I predict True.");
console.log(newCar != "toyota");
console.log("Is car_ !== 'toyota'? I predict True.");
console.log(newCar !== "toyota");
console.log("Is car_ > 'toyota'? I predict False.");
console.log(newCar > "toyota");
console.log("Is car_ < 'toyota'? I predict True.");
console.log(newCar < "toyota");
console.log("Is car_ >= 'subaru'? I predict True.");
console.log(newCar >= "subaru");
console.log("Is car_ <= 'subaru'? I predict True.");
console.log(newCar <= "subaru");
console.log("Is car_.length == 6? I predict True.");
console.log(newCar.length == 6);
//Q24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//code:
let car1 = "subaru";
let num = 5;
let fruits2 = ["apple", "banana", "orange"];
console.log("Is car1 == 'subaru'? I predict True.");
console.log(car1 == "subaru");
console.log("Is car1 == 'Subaru'? I predict False.");
console.log(car1 == "Subaru");
console.log("Is car1.toLowerCase() == 'subaru'? I predict True.");
console.log(car1.toLowerCase() == "subaru");
console.log("Is num == 5? I predict True.");
console.log(num == 5);
console.log("Is num > 4 and num < 6? I predict True.");
console.log(num > 4 && num < 6);
console.log("Is num > 6 or num < 4? I predict False.");
console.log(num > 6 || num < 4);
console.log("Is fruits2 array contains 'apple'? I predict True.");
console.log(fruits2.includes("apple"));
console.log("Is fruits2 array contains 'mango'? I predict False.");
console.log(fruits2.includes("mango"));
console.log("Is fruits2 array not contains 'mango'? I predict True.");
console.log(!fruits2.includes("mango"));
//Q25
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
//code:
// Alien Colors #1:
// Passing version:
let color = "green";
if (color === "green") {
    console.log("The player just earned 5 points.");
}
//Failing version:
let color1 = "yellow";
if (color === "green") {
    console.log("The player just earned 5 points.");
}
