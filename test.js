//(Q1) Solve the problem with Javascript  to find the maximum between two numbers. (Hint: take 2 variables and find the maximum number between them)
let firstNum = 7;
let secondNum = 6;

if (firstNum > secondNum) {
    console.log("Maximum Number is:",firstNum);
}else if (secondNum > firstNum) {
    console.log("Maximum Number is:",secondNum);
}else {
    console.log("It's complicated");
}


// (Q2)Solve the problem with Javascript  to check whether a number is negative, positive or zero. (take a single variable and check using if else condition)

let value = -1;
if (value === 0) {
    console.log("Value is:",value);
}else if (value > 0) {
    console.log("Positive Value is:",value);
}else if (value < 0) {
    console.log("Negative Value is:",value);
}

// (Q3) Solve the problem with Javascript  to check whether a number is divisible by 10 or not. (take single variable and check using if else condition)

let dividedNum = 10;

if (dividedNum % 10 === 0) {
    console.log(dividedNum,"Number is divisible by 10");
}else {
    console.log(dividedNum,"Number is not divisible by 10");
}

// (Q4) Solve the problem with Javascript  to check whether a number is even or odd.
let num = 12;
 
if (num % 2 === 0) {
    console.log(num,"is an even number");
}else {
    console.log(num,"is an odd number");
}

//*(Q5) Solve the problem with Javascript  to check whether a character is in the alphabet or not.??Confused I don't know how to write this code....

// (Q6) Solve the problem with Javascript  to check whether the temperature is hot, cold or normal. (30 <=  is hot, 25 >= is cold , any other value is normal)

let temp = 29;

if (temp >= 30) {
    console.log(temp,"Temperature is Hot");
}else if (temp >=25) {
    console.log(temp,"Temperature is Cold");
}else {
    console.log(temp,"Temperature is Normal");
}

// (Q7) Solve the problem with Javascript  to find a maximum between three numbers. (Hint: take 3 variables and find the maximum number between them use logical and operator for that)

let numOne = 100;
let numTwo = 101;
let numThree = 50;

if (numOne > numTwo && numOne > numThree) {
    console.log(numOne,"is maximum Number");
}else if (numTwo > numOne && numTwo > numThree) {
    console.log(numTwo,"is maximum Number");
}else if (numThree > numOne && numThree > numTwo) {
    console.log(numThree,"is maximum Number");
}

// (Q8) Write a JavaScript expression using the ternary operator that checks if a number x is even or odd. Store the result in a variable and print “Even Number” or “Odd Number

let x = 10;

let result = x % 2;
x % 2 === 0 ? console.log("an Even number") : console.log("an Odd number");



// (Q9) Use the logical AND operator to determine if two variables, numOne and numTwo, are both greater than 30. Print a message to the console reflecting the result.

let numberOne = 33;

let numberTwo = 32;

if (numberOne > 30 && numberTwo > 30) {
    console.log("Both Number are > 30 now");
}else {
    console.log("wrong input");
}

// (Q10) Write a JavaScript program that uses if-else statements combined with logical operators. The program should check if a person’s age is between 13 and 19. If so, print “Teenager”. Otherwise, print “Not a teenager”. (Hint: Combining If-Else and Logical Operators)

let personAge = 13;

if (personAge >= 13 && personAge <= 19) {
    console.log("Teenager");
}else {
    console.log("Not a teenager");
}

