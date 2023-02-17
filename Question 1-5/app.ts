//First Five Questions

//Q1

//Install Node.js and VS Code on your computer.


//Q2

//Personal Message: Store a person’s name in a variable, and print a message to that person.
//Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

//code:



let firstName: string = "Eric";
console.log(`Hello ${firstName},  would you like to learn some Python today?`)






//Q3


//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

//code:


function titleCase(a: string) {
    var sentence = a.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
 console.log(sentence.join(" "));
 return sentence;
 } 
 titleCase("Hammad Salman Ruwaifa Khubaib");


 //Q4

//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
//Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”

//code:


console.log("Albert Einstein once said, “Try not to become a man of success. Rather become a man of value.”");



//Q5

//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
//Then compose your message and store it in a new variable called message. Print your message.

//code:



let famousPeson: string = "Albert Einstein";
let quote: string = " “Try not to become a man of success. Rather become a man of value.”";
console.log(`${famousPeson},${quote}`);
