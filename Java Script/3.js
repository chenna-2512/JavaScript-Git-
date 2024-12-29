// Loops in JS
// For Loops
let a = 5;
for(let i=0;i<a;i++){
    console.log(i);
}

let sum = 0;
for(let i=0;i<=20;i++){
    if(i%2===0){
        sum+=i;
    }
}
console.log(sum);

// Infinite for loop - executing loop for infinite times

// While loop
let k = 10;
let i = 0;
while(i<k){
    console.log(k);
    i++;
}
// do while loop

// for of
let s = "tony stark";
let len = 0;
for(let k of s){
    console.log(k);
    len++;
}
console.log(len);20

// for in loop

let stu = {
    fullName : "akhil",
    age : 20,
    cgpa : 8.5,
    isPass : true
};

for(let i in stu){
    console.log(i," : ",stu[i]);
}


// Guess number game

let gamenum = 20;
let usernum = prompt("Guess the correct number");
while(usernum!=gamenum){
    usernum = prompt("You entered wrong number,please enter correct number");
}
console.log("the guess number is correct ", gamenum);