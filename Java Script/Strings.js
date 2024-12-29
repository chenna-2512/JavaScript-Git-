// Strings

let str1 = "Ramu";
let str2 = "Ajay Kumar";
console.log(str1);
console.log(str2);
console.log(str1.length);
console.log(str2.length);
console.log(str1[2]);
console.log(str2[5]);


// Template Literals - A way to have embedded expressions in strings

let stu = {
    name : "Ramu",
    age : 24,
}
console.log("My name is ",stu["name"]," and my age is ",stu.age," years"); // normal string
let output = `My name is ${stu.name} and my age is ${stu.age} years`; // Template Literals
console.log(output);


// String Interpolation - To create strings by doing substitution of place holders
let str1length = `The length of ${str1} is ${str1.length}`;
console.log(str1length);

// Escape Characters
// \n - to break the string and print in a new line
console.log("Apna\nCollege");
// \t - to provide tab space between strings
let str3 = "Apna\tCollege";
console.log(`The length of ${str3} is ${str3.length}`);


// String Methods

// str.toUpperCase()
let fullName = "Kranthi";
console.log(fullName);
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase()); //convert all the letter into lower case

fullName.toUpperCase();
console.log(fullName);

// str.trim() - remove white spaces from the string only starting and ending
let a = "  Ajay Kumar  ";
console.log(a);
console.log(a.trim());

// str.slice(start,end?) - returns some part of the string
console.log(a.slice(2,9));

// str1.concat(str2) - combines the two strings
let c = "Ajay ";
let d = "Kumar";

console.log(c.concat(d));

// str.replace(existedValue,newValue);
c = "Ajay Jumar";
console.log(c);
console.log(c.replace("J","K"));

// str.charAt(idx) - it prints the character present at the idx
console.log(c.charAt(5));
console.log(c.charAt(2));

// str.replaceAll(start,end) - it replces all the character
c = "hellololo";
console.log(c.replaceAll("l","p"));