// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// assign the variable called name to value 'Dane'
// Create a condition in which if name is exactly the value of Mary, then console log the message 'Hi, Mary!'
// If name is any other value than Mary, then console log the message 'How do you do?'
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//Declare secret as a variable. Declare code as a variable with a value of 123.
//Create a conditional in which if code is exactly 123, the value of secret is assigned as the string, 'super'
//as well as changing the value of code to be 246 (123 * 2)
//Then create a new conditional in which if code is greater than 250, the value of secret is assigned as 'duper'
//Since 246 is less than 250, the value of secret remains 'super', so console log will display super.
//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//Assign isStudent as a variable with a value of true. Assign age as a variable with a value of 34.
//Assign zip as a variable with a value of 55407.
//Create compound conditional where  variable isStudent needs to exact match the value true and the variable zip is
//greater than 80000.  The variable zip is less than 80000, since this conditional uses && where both conditions must be true,
//the console.log will not display the first outcome, 'You`re a student on the West Coast!'
//Since the first statement did not meet the condition, the command else if evaluates the second condition where the variable
//isStudent needs to exact match the value false and the value age must be less than 30. Neither condition is met, so
//console.log will not display 'What are your hobbies?'. Since this condition is not met, the command else if evaluates a new
//condition in which the variable isStudent needs to exact matche the value true. This condition is met and console.log will
//display 'Welcome to Prime!'. The final else command will not run because a previous condition has been met.
//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'
//FIX Variable colorOne should have value 'blue' and variable colorTwo should have value 'red' as per instructions.
//Semicolon is not needed after setting variable colorOne to value 'purple' since the condition is inside the curly brackets.
//Unsure about desired outcome, did the instructions want to assign a colorThree? If not, the instructions call for changing the
//value of both colorOne and colorTwo variables to purple.  There is no reflection in the code about colorTwo in the condition.
/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'
//FIX Instructions call for setting the variable 'time', code set the constant 'time'.
//The instructions call for a compound conditional in which both conditions need to be true is using the
//operator ||, change to operator &&.
//
/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.
//FIX Instructions call for variable minAge, code shows constant minAge. Change to let minAge = 21
//Since the command if(minAge <= age) essentially is the same as if(age >= minAge), no changes needed.
//Cosole.log entries are ordered incorrectly, if(minAge <= age), the first console.log should display 'enter'
//The second console.log should display 'no entry'
/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
