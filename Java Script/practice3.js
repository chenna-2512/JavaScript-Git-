let button = document.createElement("button");
button.innerText = "Change Background";

let body = document.querySelector("body");
body.prepend(button);

button.style.backgroundColor = "green";
button.style.color = "white";
button.style.borderRadius = "10px";
button.style.padding = "10px";


let para = document.querySelector("p");
console.log(para.classList);
console.log(para);
// console.classList(para);

let val = para.classList.add("c1");
// para.classList.remove("c1");
console.log(para.classList);