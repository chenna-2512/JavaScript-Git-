// Functions in Java Script  -  Block of Code that performs a specific task,can be invoked whenever needed

// Average of an arrays using function
function average(arr){
    let sum = 0;
    for(let i of arr){
        sum+=i;
    }
    let res = sum/arr.length;
    return res;
}

let arr = [85,74,95,82,78,92];
console.log(average(arr));


//Without Parameter or Function Call
myFunction();

function myFunction(){
    console.log("Hello World!");
}


//With Parameter or Function Parameter
myFunction1("Hello");

function myFunction1(msg){
    console.log(msg);
}

//Sum of two numbers or Function with multiple parameters

let y = sum(5,8);
console.log(y);
function sum(a,b){
    return a+b;
}

// Modern form of JS
// Arrow Functions - Compact way of writing a function

const arrowSum = (a,b)=>{
    return a+b;
}
console.log(arrowSum);
console.log(arrowSum(3, 4 ));

let arrowMul = (a,b)=>{
    return a*b;
}
console.log(arrowMul(4,5));

arrowMul = 5;
console.log(arrowMul);

//
const printHello = ()=>{
    console.log("hello");
}

const printHello1 = (msg)=>{
    console.log(msg);
}
printHello1("Hello");


//vowel count in a str using normal fun methd

let ans = countVowels("Chenna Keshava");
console.log(ans);
function countVowels(msg){
    let cnt = 0;
    for(let c of msg){
        if(c==='a' || c==='e' || c==='i' || c==='o' || c==='u'){
            cnt++;
        }
    }
    return cnt;
}

//Using Arrow Function
const countVowels1 = (msg) =>{
    let cnt = 0;
    for(let c of msg){
        if(c==='a' || c==='e' || c==='i' || c==='o' || c==='u'){
            cnt++;
        }
    }
    console.log(cnt);
}

countVowels1("ap");

//foreach fun - it is only used for arrays and it is not used for strings --> higher order method or higher order function

//function ko parameter use karalia and function ko return be karalia thats why it is called as HOM/HOF

let array = [4,5,6,7,8,9];
array.forEach(function printVal(val) { //here val reference to array value
    console.log(val);
});
array.forEach((val) => { //here val reference to array value
    console.log(val);
});

let str = ["pune","maharashtra","delhi"];
str.forEach((ch, i)=>{
    console.log(ch.toUpperCase(), i);
});


//practice qn

let sqarr = [2,5,6,8,10];
let oarr = [];
sqarr.forEach((val) => {
    console.log(val*val);
});

let calsq = (val) => {
    console.log(val*val);
}
sqarr.forEach(calsq);


// Some More Array Methods

// Map method is like forEach function

let num = [67,72,84];

num.map((val)=>{
    console.log(val);
});


let newArr = num.map((val)=>{
    return val*2;
});
console.log(newArr);

// filter method - Create a new array elements that give true for a condition/filter

let numarr = [1,2,3,4,5,6];

let evenarr = numarr.filter((val) => {
    return val%2 == 0;
});

console.log(evenarr);

// Reduce Method - It performs some operations on arrays and reduces to single value. It returns that value
let rarr = [20,5,16,4,30];

const outpu = rarr.reduce((prev ,curr) =>{
    console.log(prev,"   ",curr);
    return prev+curr;
});
console.log(outpu);


const cont = rarr.reduce((prev,curr) => {
    return prev>curr?prev:curr;
});

console.log(cont);


// Practice qns

let marksarr = [97,82,85,94,92,75];

let g90arr = marksarr.filter((val) => {
    return val>90;
});
console.log(g90arr);


// qn2

let n = prompt("Enter the size of array : ");
let iarr = [];
for(let i=0;i<n;i++){
    // iarr[i] = prompt("Enter the number to be stored in array : ");
    iarr[i] = i+1;
}

let qn2sum = iarr.reduce((prev,curr) => {
    return prev+curr;
});

let piarr = iarr.reduce((prev,curr) => {
    return prev*curr;
});
console.log(iarr);
console.log(qn2sum);
console.log(piarr);