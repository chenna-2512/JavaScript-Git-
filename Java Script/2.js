// Comments in JS
// ---> Single line comment
/*
multiline comment
*/   


// Operators
// Artimetic Operator

let a = 5;
let b = 10;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(b/a);
console.log(a%b);
console.log(a**2);

// Unary Operators - Increment,Decrement
a++;
console.log(a);
a++;
a--;
console.log(--a);


// Assignment Operators
// =
// +=
// -=
// *=
// /=
// %=
// **=

a = 2;
a **= 2;
console.log(a);


// Comparision Operators
// == - both the values are equal or not
// === - Strict version (It check with data type also)
// != - both the values are not equal 
// !== - Strict Version
// <= , >= , < , >

console.log(a==b);
a = 10;
console.log(a==b);
a = 2;
console.log(a!=b);
a = "10";
console.log(a==b);
console.log(a===b);


// Logical Operators
// Logical AND - && If both the expressions returns true then only it returns true
// Logical OR  - ||
// Logical NOT - !

console.log(5>2 && 5==5); //true
console.log(5>2 && 5==4);   //false
console.log(5>2 || 5==4);   //true
console.log(!(5>2 && 5==4));   //true



// Conditional Statements
// If Statement

let age = 18;
if(age > 18){
    console.log("Grant driving licence");
}
if(age <= 18){
    console.log("Dont Grant driving licence");
}


//if-else
if(age > 18){
    console.log("Grant driving licence");
}
else{
    console.log("Dont Grant driving licence");
}

let num = 5;
if(num%2===0){
    console.log(num,"   Even");
}else{
    console.log(num,"   odd");
}

// else if

num = 2;

if(num===0){
    console.log("num is zero");
}else if(num>=0){
    console.log(num, " is positive");
}else{
    console.log(num," is negative");
}


// Ternary Operator - condition?true o/p:false o/p;
num = 5;
num%2==0?console.log(num, " is Even"):console.log(num, " is Odd");

// Switch Statement - it is like a switch case in java
const expr = 'Banana';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}


// alert and prompt difference
// alert("Hello");
// let name = prompt("Hello");
// console.log(name);21


// Example of Prompt

let number = prompt("Enter a number");
if(number%5==0){
    console.log(number, "  is multiple of 5");
}else{
    console.log(number, "  is not multiple of 5");
}
