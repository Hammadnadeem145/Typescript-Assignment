//Q31

// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

//code:


let user: any = [];

if (user.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let i = 0; i < user.length; i++) {
        console.log([i]);
    }
};


//Q32

// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

//code:


let current_users: string[] = ["John", "Jane", "Jim", "Jenny", "Jake"];
let new_users: string[] = ["john", "Sarah", "Jane", "Jordan", "Jim"];

for (let i = 0; i < new_users.length; i++) {
    let newUsername = new_users[i].toLowerCase();
    if (current_users.includes(newUsername)) {
        console.log(`Username "${new_users[i]}" is already taken, please enter a new username.`);
    } else {
        console.log(`Username "${new_users[i]}" is available.`);
    }
};


//Q33

// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

//code:


let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
    let ordinal = "";
    let number = numbers[i];
    if (number === 1) {
        ordinal = "st";
    } else if (number === 2) {
        ordinal = "nd";
    } else if (number === 3) {
        ordinal = "rd";
    } else {
        ordinal = "th";
    }
    console.log(number + ordinal);
};


//Q34

// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

//code:


let pizzas: string[] = ["Pepperoni", "Margherita", "Hawaiian"];

for (let i = 0; i < pizzas.length; i++) {
    console.log(`I like ${pizzas[i]} pizza.`);
}

console.log("I really love pizza!");


//Q35

//Animals: Think of at least three different animals that have a common characteristic. 
//Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
//• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
//• Add a line at the end of your program stating what these animals have in common. 
//You could print a sentence such as Any of these animals would make a great pet!

//code:


let animals: string[] = ["Dog", "Cat", "Rabbit"];

for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");