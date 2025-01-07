// console.log("Hello World!");
// console.log("This is to test my javascript as I am learning new topics about it! This message is being executed in a separate javascript file that is being reference in the html page.");
// // We used console.log() to print out any statement towards the user to see in the Developer Console section tab when they inspect the web browser. Try it out!

// // Practice using let variable types and printing them out.
// let name = "John";
// let surname = "Doe";

// console.log(name);
// console.log(surname);

// // Declaring and reassigning variable.
// let age= 11;
// console.log(age);

// age = 54;

// console.log(age);
// // Notice in the developer console tab in the webpage, when you inspect the int variable show up as green.

// // Practice with const. Const variables are used for when we don't want or need to reassign a variable ever, even if its changed later. If it is changed, the code will throw an error as shown in the example below.

// const Pi = 3.14; // Declare const variable
// // Pi = 10; // Try to reassign it and print it out on the console. This is commented out by default as it will prevent future tasks from running.
// console.log(Pi);
// // An error message should shown in the developer console tab in the webpage when inspecting this output.


// // Practice doing equations and printing in the console.log(function) form The Odin Project lessons.

// console.log((3+4)-76*(1+1));

// console.log(23+23+46-12+45);

// console.log((4+6+9) / 77);

// let a = 10;
// console.log("a =", a);

// console.log(9*a);

// let b = 7*a;

// console.log("b =", b);

// const max = 57;

// let actual = max-13;

// let percentage = actual / max;

// console.log("Percentage =",percentage);


// // Practicing with all the different data types and conditionals properties within Javascript.

// // String types:

// const string = "The revolution will not be televised.";
// console.log(string);

// // Errors to look for when declaring string types. They are commented out by default to all further actions to work but un-comment them to figure out what the error looks like. 

// // const badString1 = This is a test; // This will throw an error as there are multiple values that are not grouped together and it being perceived as something else.
// // const badString2 = 'This is a test; // missing end/complete quote. 
// // const badString3 = This is a test'; missing beginning quote


// const badString = string;
// console.log(badString);

// // Using single, double and backticks for strings:

// const single = 'Single quotes';
// const double = "double quotes";
// const backtick = `backtick`;

// console.log(single);
// console.log(double);
// console.log(backtick);

// // Then can be errors made here as well, as you should not mix different type of quotes together: Again this section is commented out to allow further actions to occur but un-comment it to see error thrown in developer console tab on the webpage.

// // const badQuote = 'This is not allowed"; // You are not allowed to do this because different quote beginning and endings are present.


// // Embedded string using backticks:
// const name1 = "Chris";

// const greeting = `Hello, ${name1}`; // In order to add the name1 string declare before this, you must use a backtick.
// console.log(greeting);


// const string1 = "Hello, ";
// const string2 = "how are you?";

// const joined = `${string1}${string2}`;
// console.log(joined);

// // Using different date types with each other and mixing them all together into one giant string output.
// const song = "Fight the Youth";
// const score = 9;
// const highestScore = 10;
// const output = `I like the song ${song}. I give it a ${score} out of ${highestScore}`;
// const output1 = `I like the song ${song}. I give it a score of ${(score / highestScore) *100}%`;
// console.log(output);
// console.log(output1);

// // Multi-line strings: How to set a newline within a string type variable.

// // Using a newline in the physically string itself:
// const newLine = `One day you finally knew
// what you have to do, and began.`;
// console.log(newLine);

// // insert the keyword for a newline '\n':
// const newline = "One day you finally knew\nwhat you had to do, and began.";
// console.log(newline);

// // When trying to implement quotes, its best to use different type of quotes as shown below:

// const goodQuote1 = 'She said "I think so!"';
// const goodQuote2 = `She said "I'm going in there"`


// // Number and string:

// const name2 = "Front: ";
// const num = 123;
// console.log(name2 + num);

// // converting a string number as a number and vice versa. We also test the typeof functionality to see what data type or variable is as well as to confirm it has converted properly:

// const myString = "123";
// const myNum = Number(myString);

// console.log(typeof myNum);

// const string3 = 123;
// console.log(string3);
// const myNumber = String(string3);
// console.log(typeof myNumber);

// // Working with Comparison operations:

// // Boolean:

// alert(2>1);
// alert(2==1);
// alert(1!= 2);
// // Neat little trick is that the alert throws a warning on the screen that outputs the result of the boolean function. very handy for debugging!

// let result = 5>4;

// alert (result);

// // String comparisons:

// alert('z'>'a');
// console.log("Done")


// // Conditional statements:

// const hour = 15;

// if (hour < 14){
//     console.log("Winner Winner CHICKEN  DINNER!");
// } else{
//     console.log("WE GOT US A RUNNER");
// }



// // Working with functions and passing arguments from via function calls

// function favoriteAnimal(animal) {
//     return animal + " is my favorite animal!"
// }

// console.log(favoriteAnimal('Goat'))

// // Using built-in functions: example is used from https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Functions#where_do_i_find_functions

// const myText = "I am a string";
// const newString = myText.replace("string", "sausage");
// console.log(newString);
// // the replace() string function takes a source string,
// // and a target string and replaces the source string,
// // with the target string, and returns the newly formed string


// const myArray = ["I", "love", "chocolate", "frogs"];
// const madeAString = myArray.join(" ");
// console.log(madeAString);
// // the join() function takes an array, joins
// // all the array items together into a single
// // string, and returns this new string

// const myNumber1 = Math.random();
// // the random() function generates a random number between
// // 0 and up to but not including 1, and returns that number


// // How to call or "Invoke" a function:
// function myFunction() {
//     alert("hello");
//   }
  
//   myFunction();
//   // calls the function once
  


//   const myArray1 = ["I", "love", "chocolate", "frogs"];
// const madeAString1 = myArray.join(" ");
// console.log(madeAString);
// // returns 'I love chocolate frogs'

// const madeAnotherString = myArray.join();
// console.log(madeAnotherString);
// // returns 'I,love,chocolate,frogs'

// // If no parameter is included to specify a joining/delimiting character, a comma is used by default.


// // Setting default parameters for functions:
// function hello(name = "Chris") {
//     console.log(`Hello ${name}!`);
//   }
  
//   hello("Ari"); // Hello Ari!
//   hello(); // Hello Chris!


// // Different approaches to function setup:
// function myFunction() {
//     alert("hello");
//   }

// //   This is called an anonymous function, because it has no name.
// (function () {
//     alert("hello");
//   });

// // Another example of how Anonymous function can be setup:

// function logKey(event) {
//     console.log(`You pressed "${event.key}".`);
//   }
  
//   document.addEventListener("keydown", logKey);
  

// // Testing how return values work 
// function random(number) {
//   return Math.floor(Math.random() * number);
// }

// console.log("The Result is:", random(5));

// // Testing prompt function mixed with if and while statements:
// let person = prompt("Please enter your name", "Enter your name");
// if (person == "" || person == "Enter your name"){
//   while (person == "" || person == "Enter your name"){
//     person = prompt("Please enter your name", "Enter your name");
//   }
// }

// console.log("The user name is:", person);

// // Testing confirm function

// let ques = confirm("How are you today lad?");
// console.log(ques);


// Testing Arrow Function:

// let sum = (a,b) => a+b;

// alert(sum(1,2));


// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );

// Function expressions above re-written using Arrow function:


// ask(
//   "Do you agree?",
//   () => { alert("You agreed."); },
//   () => { alert("You canceled the execution."); }
// );



// Testing DOM:

// // selects the #container div (don't worry about the syntax, we'll get there)
// const container = document.querySelector("#container");
// let list = Array.from(container.childNodes);
// console.log(list); // display all child elements within the container div class.

// // selects the first child of #container => .display
// const display = container.firstElementChild;
// console.log(display);  // <div class="display"></div>



// // creates a new div referenced in the variable 'div'
// const div = document.createElement("div");

// // adds the indicated style rule to the element in the div variable
// div.style.color = "blue";

// // adds several style rules
// div.style.cssText = "color: blue; background: white;";

// // adds several style rules
// div.setAttribute("style", "color: blue; background: white;");


// // creates a text node containing "Hello World!" and inserts it in div
// div.textContent = "Hello World!";

// // renders the HTML inside div
// div.innerHTML = "<span>Hello World!</span>";

// your JavaScript file
// const container = document.querySelector("#container");

// // We create a new div type element and name the div class content that will contain the text "This is the glorious text-content!"
// // as its text-content attribute."
// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "This is the glorious text-content!";

// container.appendChild(content);

// Doing the exercises for DOM from The Odin Project:

const container = document.querySelector("#container");

// a <p> with red text that says “Hey I’m red!”
const para = document.createElement("p");
para.style.color = "Red";
para.textContent = "Hey I'm red!"

container.append(para);

// an <h3> with blue text that says “I’m a blue h3!”

const header = document.createElement("h3");
header.style.color = "Blue";
header.textContent = "I'm a blue h3!";

container.append(header);


// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
const newDiv = document.createElement("div");
newDiv.style.background = "pink";
newDiv.style.border = "black";
newDiv.style.borderBlockStyle ="solid";

const head = document.createElement("h1");
head.textContent = "I'm in a div";

const newText = document.createElement("p");
newText.textContent = "ME TOO!"

newDiv.append(head);
newDiv.append(newText);


container.append(newDiv);

// Practicing with events in different ways:

// Method 2:
// the JavaScript file
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");



// Method 3: using eventListener():
// the JavaScript file
const button = document.querySelector("#button");
button.addEventListener("click", () => {
  alert("Hello World");
});



// Attaching listeners to groups of nodes:
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});


