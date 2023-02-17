//Q41

// Magicians: Make a array of magician’s names.
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

//code:

function showMagicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}

const magiciansNames: string[] = [
  "Harry Houdini",
  "David Blaine",
  "Penn Jillette",
  "Teller",
];
showMagicians(magiciansNames);

//Q42

// Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.

//code:

function makeGreat(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = "the Great " + magicians[i];
  }
}

const magiciansNames1: string[] = [
  "Harry Houdini",
  "David Blaine",
  "Penn Jillette",
  "Teller",
];

makeGreat(magiciansNames1);

showMagicians(magiciansNames1);

function showMagicians1(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}

//Q43

//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
//Because the original array will be unchanged, return the new array and store it in a separate array.
//Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

//code:

let magicians: string[] = ["David Copperfield", "Criss Angel", "David Blaine"];

function make_great(names: any) {
  let greatMagicians: any = [];
  for (let name of names) {
    greatMagicians.push("The Great " + name);
  }
  return greatMagicians;
}

let original = magicians;
let greats = make_great(original.slice());

function show_magicians(names: any) {
  for (let name of names) {
    console.log(name);
  }
}

console.log("Original Magicians:");
show_magicians(original);

console.log("\nGreat Magicians:");
show_magicians(greats);

//Q44

//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
//Call the function three times, using a different number of arguments each time.

//code:

function orderSandwich(...items: string[]) {
  console.log(
    `Your ordered a sandwich with ${items.length} items: ${items.join(", ")}`
  );
}

orderSandwich("bread", "cheese", "lettuce", "tomato");
orderSandwich("bread", "ham", "egg");
orderSandwich("bread", "peanut butter", "jelly");

//Q45

// Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was stored correctly.

//code:

interface Car {
  manufacturer: string;
  modelName: string;
  [key: string]: any;
}

function createCar(manufacturer: string, modelName: string, ...options: any) {
  let car: Car = {
    manufacturer,
    modelName,
  };

  for (let i = 0; i < options.length; i += 2) {
    options[i] = options[i + 1];
  }
  return car;
}

let myCar = createCar("Toyota", "Camry", "color", "red", "sunroof", true);
let myCar1 = createCar("Tesla", "Model S", "color", "white", "autopilot", true);

console.log(myCar);
console.log(myCar1);
