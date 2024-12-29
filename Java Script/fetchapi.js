// fetch api - this api provides an interface for fetching(sending/receiving) resources.
// It uses Request and Response objects
// The fetch() method is used to fetch a resource(data).

// let promise = fetch(url,[options]);

// API - Application Programming Interface

const URL = "https://api.spoonacular.com/recipes/findByNutrients?ref=apilist.fun";


let getFacts = async () => {
    console.log("getting data1.....");
    let response = await fetch(URL);
    console.log(response); //JSON Format
    console.log(response.status);
};

console.log(getFacts());


// Understanding Terms 
// AJAX is Asynchronous JS and XML or AJAJ - Asynchronous JS and JSON
// JSON - Java Script Object Notation

let para = document.querySelector("#fact");
let btn  = document.querySelector("#btn");

let getFacts1 = async () => {
    console.log("getting data1.....");
    let response = await fetch(URL);
    console.log(response); //JSON Format
    console.log(response.status);
    let data = await response.json();
    console.log(data[0]);
    para.innerText = data[0];
};

btn.addEventListener("click",getFacts1);


// Requests and Response