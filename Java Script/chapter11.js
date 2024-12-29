// we are going to learn about asynchronous programming in this chapter

// async wait>>promise chains>>callback hell

// Synchronous Programming

console.log("one");
console.log("two");
console.log("three");

// Asynchronous Programming

function hello(){
    console.log("hello");
}


setTimeout(hello,6000);
function hi(){
    console.log("hi");
}

hi();


setTimeout(
    function enjoy(){
        console.log("enjoy");
    },8000
);



// CallBack - It is a function passed an argument to another function

function sum(a,b){
    console.log(a+b);
}

function caluculator(a,b,sumCallBack){
    sumCallBack(a,b);
}

caluculator(1,4,sum);

caluculator(1,8, (a,b) => {
    console.log(a+b);
});


// CallBack Hell : Nested callbacks stacked below one another forming a pyramid structure.(pyramid of doom)
//  This style of programming becomes difficult to understand and manage


function getData(dataId, getNextData){
    setTimeout(() => {
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}

console.log(getData("hello", () => {
    getData("hi",()=> {
        getData("Enjoy");
    });
}))



// Promises - it is for eventual completion of task.it is an object
//  it is a solution to call back hell
// let promise = new Promise((resolve,reject) => {.....}) - function with 2 handlers
// promise has three states 1.pending - the result is undefined 2.fullfilled[resolved] 3.Rejected - the result is rejected(error)



let promise = new Promise((resolve,reject) => {
    console.log("I am a promise");
    // resolve(123);
    reject("some error");
});

console.log(promise);

function getData(dataId, getNextData){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        },10000);
    })
}

let finalRes = getData(" ram ");
console.log(finalRes);


// .then & .catch
// promise.then((res) => {....});
// promise.catch((err) => {....});


const getPromise = () => {
    return new Promise((resolve,reject) => {
        console.log("I am a promise");
        resolve(123);
        // reject("some error");
    });
}
let promise1 = getPromise();

promise1.then ((res) => {
    console.log("promise has fullfilled  ",res);
});

promise.catch ((err) => {
    console.log("rejected  ",err);
});


// Promise Chain

function asyncfun(){
    return new Promise((resolve,reject) => {
       setTimeout(() => {
        console.log("some data1");
        resolve("success");
       },8000); 
    });
};

function asyncfun2(){
    return new Promise((resolve,reject) => {
       setTimeout(() => {
        console.log("some data2");
        resolve("success");
       },8000); 
    });
};

console.log("fetching data1....");
asyncfun().then((res) => {
    console.log("fetching data2....");
    asyncfun2().then((res) => {});
});



function getData(dataId){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success");
        },10000);
    })
}

// promice chain
getData(1).then((res) => {
    getData(2).then((res) => {
        console.log(res);
    }); 
});

getData(3)
    .then((res) => {
        return getData(4);
    }).then((res) => {
        return getData(5);
    }).then((res) => {
        console.log(res);
    }) 



// Async Await - async functions always returns promise 
//   async function myFunc() {....}
// await pauses the execution of its surrounding async function until the promise is settled

async function hello() {
    console.log("hello");
}

function api() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 4000);
    });
}

async function getWeatherData() {
    await api();//1st
    await api();//2nd
}

console.log(getWeatherData());


function getData(dataId){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success");
        },40000);
    })
}

//Async await
async function getAllData() {
    console.log("getting data 1..");
    await getData(1);
    console.log("getting data 2..");
    await getData(2);
    console.log("getting data 3..");
    await getData(3);
}

console.log(getAllData());