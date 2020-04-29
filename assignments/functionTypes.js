// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
//function declaration
function AddOne(n){
  return n + 1;
}
//function expression
let AddOne= function(n){
  return n + 1;
};
//arrow function
let AddOne= n => n +1;
// Arrow fuction with curly braces
let AddOne = n => {
  return n+1;
}
//function invocation
AddOne(23);

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
//function declaration
function SubtractOne(n){
  return n - 1;
}
//function expression
let SubtractOne= function(n){
  return n- 1;
};
//arrow function
let SubtractOne= n => n - 1;
// Arrow fuction with curly braces
let SubtractOne = n => {
  return n - 1;
}
//function invocation
SubtractOne(23);

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
//function declaration
function Add(x,y){
  return x + y;
}
//function expression
let Add= function(x,y){
  return x + y;
};
//arrow function
let Add= (x,y) => x + y;
// Arrow fuction with curly braces
let Add = (x,y) => {
  return x + y;
}
//function invocation
Add(20,40);

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
//function declaration
function Subtract(x,y){
  return y - x;
}
//function expression
let Subtract= function(x,y){
  return y-x;
};
//arrow function
let Subtract= (x,y) => y - x;
// Arrow fuction with curly braces
let Subtract = (x,y) => {
  return y-x;
}
//function invocation
Subtract(20,40);

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
//function declaration
function multiply(x,y){
  return x * y;
}
//function expression
let multiply= function(x,y){
  return x * y;
};
//arrow function
let multiply= (x,y) => x * y;
// Arrow fuction with curly braces
let multiply = (x,y) => {
  return x * y;
}
//function invocation
multiply(20,40);

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
//function declaration
function divide(x,y){
  return x / y;
}
//function expression
let divide= function(x,y){
  return x / y;
};
//arrow function
let divide= (x,y) => x / y;
// Arrow fuction with curly braces
let divide = (x,y) => {
  return x / y;
}
//function invocation
divide(20,40);
/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
//function declaration
function squared(x){
  return x * x;
}
//function expression
let squared = function(x){
  return x * x;
};
//arrow function
let squared = (x) => x * x;
// Arrow fuction with curly braces
let squared = (x) => {
  return x * x;
}
//function invocation
squared(20);

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
function mathematicalOperations(operation, x, y)
{
  if(operation == "add")
    return x+y;
  else if(operation == "subtract")
    return x - y;
  else if(operation == "multiply")
    return x*y;
  else
    return x/y;
}
let result= mathematicalOperations("multiply", 20, 30);
console.log(x + operation + y + "=" + result);
/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
function greaterValue(a,b){
  if(a>b)
    return true;
  else
    return false;
}
/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
function greaterValue(a,b){
  if(a<b)
    return true;
  else
    return false;
}
/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
function EqualValue(a,b){
  if(a==b)
    return true;
  else
    return false;
}
/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
function smaller(x,y)
{
  if(x<y)
    return x;
  else
    return y;
}
/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
function larger(x,y)
{
  if(x>y)
    return x;
  else
    return y;
}
/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
function even(n){
  if(n%2==0)
    return true;
  else
    return false;
}
/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
function odd(n){
  if(n%2!=0)
    return true;
  else
    return false;
}
/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
function grade(score, total)
{
   result= (score/total) *100;
   if (result>= 90 && result <=100)
    return "A";
   else if(result>=80 && result<=89)
    return "B";
    else if(result>= 70 && result <=79)
      return "C";
    else if(result>=60 && result <=69)
      return "D";
    else
      return "F";
}
/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
function test(word1, word2) {
  var res = word1.concat(word2);
  return res;
}