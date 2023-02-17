"use strict";
//Q6
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
//Make sure you use each character combination, "\t" and "\n", at least once. 
//Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
//code:
let firstName = "\t John Smith \n";
console.log(firstName); // prints "\t John Smith \n"
console.log(firstName.trim()); // prints "John Smith"
// Q7 or Q8
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. 
//Be sure to enclose your operations in print statements to see the results.
//You should create four lines that look like this:
//console.log(5 + 3)
//your output should simply be four lines with the number 8 appearing once on each line.
//code:
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//Q9
//Favorite Number: Store your favorite number in a variable. 
//Then, using that variable, create a message that reveals your favorite number. Print that message.
//code:
let num = 1318;
console.log(`my fav number is ${num}`);
//Q10
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
//If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. 
//Then write one sentence describing what the program does.
//code:
function addNumbers(a, b) {
    return a + b;
}
function subtractNumbers(a, b) {
    return a - b;
}
function multiplyNumbers(a, b) {
    return a * b;
}
function divideNumbers(a, b) {
    return a / b;
}
// Example usage:
const num1 = 13;
const num2 = 10;
console.log(`Addition: ${num1} + ${num2} = ${addNumbers(num1, num2)}`);
console.log(`Subtraction: ${num1} - ${num2} = ${subtractNumbers(num1, num2)}`);
console.log(`Multiplication: ${num1} * ${num2} = ${multiplyNumbers(num1, num2)}`);
console.log(`Division: ${num1} / ${num2} = ${divideNumbers(num1, num2)}`);
