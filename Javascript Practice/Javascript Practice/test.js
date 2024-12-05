console.log("Hello World!");
console.log("This is to test my javascript as I am learning new topics about it! This message is being executed in a separate javascript file that is being reference in the html page.");
// We used console.log() to print out any statement towards the user to see in the Developer Console section tab when they inspect the web browser. Try it out!

// Practice using let variable types and printing them out.
let name = "John";
let surname = "Doe";

console.log(name);
console.log(surname);

// Declaring and reassigning variable.
let age= 11;
console.log(age);

age = 54;

console.log(age);
// Notice in the developer console tab in the webpage, when you inspect the int variable show up as green.

// Practice with const. Const variables are used for when we don't want or need to reassign a variable ever, even if its changed later. If it is changed, the code will throw an error as shown in the example below.

const Pi = 3.14; // Declare const variable
// Pi = 10; // Try to reassign it and print it out on the console. This is commented out by default as it will prevent future tasks from running.
console.log(Pi);
// An error message should shown in the developer console tab in the webpage when inspecting this output.


// Practice doing equations and printing in the console.log(function) form The Odin Project lessons.

console.log((3+4)-76*(1+1));

console.log(23+23+46-12+45);

console.log((4+6+9) / 77);

let a = 10;
console.log("a =", a);

console.log(9*a);

let b = 7*a;

console.log("b =", b);

const max = 57;

let actual = max-13;

let percentage = actual / max;

console.log("Percentage =",percentage);


// Practicing with all the different data types and conditionals properties within Javascript.

// String types:

const string = "The revolution will not be televised.";
console.log(string);

// Errors to look for when declaring string types. They are commented out by default to all further actions to work but un-comment them to figure out what the error looks like. 

// const badString1 = This is a test; // This will throw an error as there are multiple values that are not grouped together and it being perceived as something else.
// const badString2 = 'This is a test; // missing end/complete quote. 
// const badString3 = This is a test'; missing beginning quote


const badString = string;
console.log(badString);

// Using single, double and backticks for strings:

const single = 'Single quotes';
const double = "double quotes";
const backtick = `backtick`;

console.log(single);
console.log(double);
console.log(backtick);

// Then can be errors made here as well, as you should not mix different type of quotes together: Again this section is commented out to allow further actions to occur but un-comment it to see error thrown in developer console tab on the webpage.

// const badQuote = 'This is not allowed"; // You are not allowed to do this because different quote beginning and endings are present.


// Embedded string using backticks:
const name1 = "Chris";

const greeting = `Hello, ${name1}`; // In order to add the name1 string declare before this, you must use a backtick.
console.log(greeting);


const string1 = "Hello, ";
const string2 = "how are you?";

const joined = `${string1}${string2}`;
console.log(joined);

// Using different date types with each other and mixing them all together into one giant string output.
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I give it a ${score} out of ${highestScore}`;
const output1 = `I like the song ${song}. I give it a score of ${(score / highestScore) *100}%`;
console.log(output);
console.log(output1);

// Multi-line strings: How to set a newline within a string type variable.

// Using a newline in the physically string itself:
const newLine = `One day you finally knew
what you have to do, and began.`;
console.log(newLine);

// insert the keyword for a newline '\n':
const newline = "One day you finally knew\nwhat you had to do, and began.";
console.log(newline);

// When trying to implement quotes, its best to use different type of quotes as shown below:

const goodQuote1 = 'She said "I think so!"';
const goodQuote2 = `She said "I'm going in there"`


// Number and string:

const name2 = "Front: ";
const num = 123;
console.log(name2 + num);

// converting a string number as a number and vice versa. We also test the typeof functionality to see what data type or variable is as well as to confirm it has converted properly:

const myString = "123";
const myNum = Number(myString);

console.log(typeof myNum);

const string3 = 123;
console.log(string3);
const myNumber = String(string3);
console.log(typeof myNumber);



