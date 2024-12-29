console.log("Chenna Keshava Welcomes You");


fullName = "Chenna Keshava";
console.log(fullName);
// let,var,const are variable declaration
let age = 24;
console.log(age);
console.log(typeof(age));

// DATA TYPES
// PRIMITIVE DATA TYPES IN JAVA SCRIPT
// Number,BigInt,Boolean,String,undefined,null,Symbol data types in js
let s = "tony stark";
console.log(s);
console.log(typeof s);
let x = null;
console.log(x);
console.log(typeof(x));
let y = BigInt(123);
console.log(y);
console.log(typeof(y));
let z = Symbol("Hi");
console.log(z);
console.log(typeof(z));

// NON PRIMITIVE DATA TYPES IN JS
// OBJECTS  - Collection of Values(Values stored in the form of KEY:VALUE Pairs in obj)
//       ARRAYS,FUNCTIONS

const student = {
    name : "Ram",
    age : 20,
    cgpa : 8.2,
    isPass : true
};
console.log(student);
console.log(typeof(student));
console.log(student['name']);
console.log(student.cgpa);
console.log(student["age"]); //or

student["age"] += 1; 
console.log(student.age);

// to change data in obj
student["age"] = 45; 
console.log(student)
console.log(typeof student);
console.log(typeof student["age"]); 

// We can't change the values of constant variables but we can change the constant objects keys data

let str = "123";
console.log(str+1);
console.log(str*2);

