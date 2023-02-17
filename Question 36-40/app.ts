//Q36

// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

//code:

function makeShirt(size: string, message: string): void {
  console.log(
    `The shirt is size ${size} and has the message "${message}" printed on it.`
  );
}

makeShirt("L", "Hello World");

//Q37

//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript.
//Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

//code:

function make_Shirt(size = "L", message = "I love JavaScript"): void {
  console.log(
    `The shirt is size ${size} and has the message "${message}" printed on it.`
  );
}

make_Shirt(); // Large with default message
make_Shirt("M"); // Medium with default message
make_Shirt("S", "JavaScript Rocks!"); // Small with custom message

//Q38

//Cities: Write a function called describe_city() that accepts the name of a city and its country.
//The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value.
//Call your function for three different cities, at least one of which is not in the default country.

//code:

function describeCity(city: string, country: string): void {
  console.log(`${city} is in ${country}.`);
}

describeCity("Karachi", "Pakistan");
describeCity("London", "England");
describeCity("Bankok", "Thailand");

//Q39

// City Names: Write a function called city_country() that takes in the name of a city and its country.
//The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

//code:

function cityCountry (city: string, country: string) { 
    return `${city}, ${country}`;
};

let city1 = cityCountry("Lahore", "Pakistan");
let city2 = cityCountry("London", "England");
let city3 = cityCountry("New York", "United States");

console.log(city1); // Lahore, Pakistan
console.log(city2); // London, England
console.log(city3); // New York, United States

//Q40

// Album: Write a function called make_album() that builds a Object describing a music album.
// The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums.
// Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s Object.
// Make at least one new function call that includes the number of tracks on an album.

//code:

interface Album {
  artist: string;
  title: string;
  tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
  const album: Album = { artist, title };

  if (tracks) {
    album.tracks = tracks;
  }

  return album;
}

const album1 = make_album("The Beatles", "Abbey Road");
const album2 = make_album("Pink Floyd", "The Dark Side of the Moon", 10);
const album3 = make_album("Led Zeppelin", "IV", 8);

console.log(album1);
console.log(album2);
console.log(album3);
