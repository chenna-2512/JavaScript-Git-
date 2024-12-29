// Important
// console.log --> prints the data in the console
// console.dir --> document object -- which prints the properties and methods of an obj
console.log("hello");
window.console.log("hello2");

// document.body.childNodes[1].innerText = "Hi";
// dom manipulation
// Selecting with id
let heading = document.getElementById("header");
console.dir(heading);
console.log(heading);


// Selection with class
let hea = document.getElementsByClassName("heading");
console.dir(hea);
console.log(hea);


// Selection with tag name
let para = document.getElementsByTagName("p");
console.dir(para);
console.log(para);


// Query Selector - document.querySelector("myclass || myId || tag") - returns first element
//                - document.querySelectorAll("myclass || myId || tag") - returns as Node List

let elem = document.querySelector(".heading");
console.dir(elem);
console.log(elem);

let allelem = document.querySelectorAll("#header");
console.dir(allelem);
console.log(allelem);


// Properties - we can get the value,change/update the value, set the value
// tagname - returns tag for element nodes

console.log(elem.tagName);

// to get children of parent tag

console.log(document.querySelector("div").children); 

// innerText - returns the text content of the element and all its children
let divi = document.querySelector("div");
console.log(divi.innerText);

// innerHtml - returns the plain text or HTML contents in the element
console.log(divi.innerHTML);

divi.innerText = "why??";

divi.innerHTML = "<div>thor</div>";

let body = document.querySelector("body");
// body.innerText = "Ramu";



// textcontent - returns textual content even for hidden elements
console.log(body.textContent);

// Attributes
// .getAttribute(attr); - to get the attribute value
let h1 = document.querySelector("h1");
let val = h1.getAttribute("id");
console.log(val);

let h2 = document.querySelector("h2");
let val1 = h2.getAttribute("class");
console.log(val1);

// .setAttribute(attr,val); - to set the attribute value
let val3 = h2.setAttribute("class","headrange");
console.log(val3);

// node.style - it talks abot the css
console.log(h1.style);

h1.style.backgroundColor = "green";
h1.style.color = "white";
h1.style.margin = "50px";
h1.style.fontSize = "25px";
h1.innerText = "Hello Ajay Kumar";
h1.style.width = "400px";


// Insert Elements in the HTML Code
let newHeading = document.createElement("h2");
newHeading.innerText = "Welcome to Kurnool";

let h1a = document.querySelector("h1");
// h1a.after(newHeading); - it adds the data outside of h1 tag
newHeading.style.margin = "10px";
newHeading.style.backgroundColor = "green";
newHeading.style.color = "white";
newHeading.style.padding = "10px";
newHeading.style.border = "2px solid black";
h1a.append(newHeading); //- it adds the data inside h1 tag but after heading
// h1a.prepend(newHeading); - it adds the data inside the h1 tag but before heading
// h1a.before(newHeading); - it adds the data outside h1 tag before


// node.remove - to remove the data from sites

let paras = document.querySelector("h2");
console.log(paras);

// paras.remove();

