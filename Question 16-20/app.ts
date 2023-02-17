//Q16

//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

//code:


let guestList: string[] = ["Albert Einstein", "Martin Luther King Jr.", "Marie Curie"];

console.log("Original guest list: " + guestList);

// Adding new guests
guestList.push("Stephen Hawking", "Nelson Mandela", "Bill Gates");

console.log("New guest list: " + guestList);

for (let i = 0; i < guestList.length; i++) {
  console.log("Dear " + guestList[i] + ", I would be honored to have you join me for dinner. It would be a great pleasure to share a conversation with you.")
};

let guestList2: string[] = ["Albert Einstein", "Martin Luther King Jr.", "Marie Curie", "Stephen Hawking", "Nelson Mandela", "Bill Gates"];

console.log("Original guest list: " + guestList2);

for (let i = 0; i < guestList2.length; i++) {
  console.log("Dear " + guestList2[i] + ", I would be honored to have you join me for dinner. It would be a great pleasure to share a conversation with you.")
}
console.log("Great News! I just found a bigger dinner table, so more space is available now.")


//let guestList = ["Albert Einstein", "Martin Luther King Jr.", "Marie Curie", "Stephen Hawking", "Nelson Mandela", "Bill Gates"];
console.log("Original guest list: " + guestList2);

// Adding new guest to the beginning of the array
guestList2.unshift("Isaac Newton");

console.log("New guest list: " + guestList2);

for (let i = 0; i < guestList2.length; i++) {
  console.log("Dear " + guestList2[i] + ", I would be honored to have you join me for dinner. It would be a great pleasure to share a conversation with you.")
}

// Adding new guest to the middle of the array
guestList2.splice(3, 0, "Thomas Edison");

// Adding new guest to the end of the list
guestList.push("Steve Jobs");
console.log("New guest list: " + guestList2);

console.log("New Set of Invitations:");
for (let i = 0; i < guestList2.length; i++) {
  console.log("Dear " + guestList2[i] + ", I would be honored to have you join me for dinner. It would be a great pleasure to share a conversation with you.")
}



//Q17

//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

//code:


let newGuestList: string[] = ["Albert Einstein", "Martin Luther King Jr.", "Marie Curie", "Stephen Hawking", "Nelson Mandela", "Bill Gates", "Thomas Edison", "Steve Jobs"];
console.log("Original guest list: " + newGuestList);
console.log("Unfortunately, my new dinner table won't arrive in time and I can invite only two people for dinner.");

// Removing guests one at a time until only two names remain in the list
while (newGuestList.length > 2) {
  let removedGuest = newGuestList.pop();
  console.log("Sorry, " + removedGuest + " I can't invite you to dinner.")
}

console.log("I'm happy to inform that " + newGuestList[0] + " and " + newGuestList[1] + " are still invited for dinner.");

// Removing the last two names from the list
newGuestList.pop();
newGuestList.pop();

console.log("Final guest list: " + newGuestList);


//Q18

//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.

//• Print your array in its original order.

//• Print your array in alphabetical order without modifying the actual list.

//• Show that your array is still in its original order by printing it.

//• Print your array in reverse alphabetical order without changing the order of the original list.

//• Show that your array is still in its original order by printing it again.

//• Reverse the order of your list. Print the array to show that its order has changed.

//• Reverse the order of your list again. Print the list to show it’s back to its original order.

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

//code:


//Original array
let locations: string[] = ["Paris", "Santorini", "Maui", "Cape Town", "Sydney"];
console.log("Original array: " + locations);

//Alphabetically sorted array
let sortedLocations = locations.slice().sort();
console.log("Alphabetically sorted array: " + sortedLocations);

//Original array still in original order
console.log("Original array still in original order: " + locations);

//Reverse alphabetically sorted array
let reverseSortedLocations = locations.slice().sort().reverse();
console.log("Reverse alphabetically sorted array: " + reverseSortedLocations);

//Original array still in original order
console.log("Original array still in original order: " + locations);

//Reversed array
locations.reverse();
console.log("Reversed array: " + locations);

//Original array in original order
locations.reverse();
console.log("Original array in original order: " + locations);

//Sorted array
locations.sort();
console.log("Sorted array: " + locations);

//Reverse sorted array
locations.sort().reverse();
console.log("Reverse sorted array: " + locations);


//Q19

//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner

//code:


let guestList3: string[] = ["Albert Einstein", "Martin Luther King Jr.", "Marie Curie"];

console.log("I am inviting " + guestList3.length + " people to dinner.");


//Q20

//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. 
//Write a program that creates a list containing these items.

//code:


//Create an array of mountains
let mountains: string[] = ["Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];

//Print the array
console.log("List of mountains: " + mountains);


//Create an array of rivers
let rivers: string[] = ["Nile", "Amazon", "Yangtze", "Mississippi", "Yenisei"];

//Print the array
console.log("List of rivers: " + rivers);


//Create an array of countries
let countries: string[] = ["Dubai", "USA", "China", "Russia", "Brazil"];

//Print the array
console.log("List of countries: " + countries);