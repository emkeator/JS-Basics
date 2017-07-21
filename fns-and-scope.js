//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

//Regular
// function isTyler(name) {
//   return (name === 'Tyler');
// }

//ES6
var isTyler = (name) => (name === 'Tyler');

// isTyler('Emily'); //-> false
// isTyler('Tyler'); //-> false

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

//Regular
// function getName() {
//   return prompt("What's your name?");
// }

//ES6
var getName = () => prompt("What's your name?");

//getName();


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

//Regular
// function welcome() {
//   alert('Welcome, ' + getName());
// }

//ES6
var welcome = () => alert('Welcome, ' + getName());

// welcome();

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Arguments--what you actually pass into the function when called
  //Parameters--the hypothetical inputs of a function that are noted and accounted for when declaring it


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //0, NaN, undefined, null, '' or "", false
  //Use an if([value here]) to check



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

//Regular
// function myName() {
//   return "Emily";
// }

//ES6
var myName = () => 'Emily';

// myName();  


//Now save the function definition of myName into a new variable called newMyName

var myNewName = myName;
// myNewName();

//Now alert the result of invoking newMyName

alert(myNewName());



//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

//Regular
// function outerFn() {
//   return function() { 
//     return 'Emily'; 
//   };
// }

//ES6
var outerFn = () => {
  return () => 'Emily';
};

// outerFn()();

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.

innerFn();
