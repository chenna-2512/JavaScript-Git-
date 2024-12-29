// Events - 

let btn1 = document.querySelector("#btn1");
let body = document.querySelector("body");
// btn1.onclick = (evt) => {
//     if(body.style.backgroundColor === "white"){
//         body.style.backgroundColor = "black";
//         btn1.style.border = "2px solid red";
//         btn1.style.backgroundColor = "green";
//         btn1.style.color = "white";
//     }else{
//         body.style.backgroundColor = "white";
//         btn1.style.border = "2px solid green";
//         btn1.style.backgroundColor = "black";
//         btn1.style.color = "white";
//     }
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// }

btn1.addEventListener("click",() => {
    if(body.style.backgroundColor === "white"){
        body.style.backgroundColor = "black";
        btn1.style.border = "2px solid red";
        btn1.style.backgroundColor = "green";
        btn1.style.color = "white";
    }else{
        body.style.backgroundColor = "white";
        btn1.style.border = "2px solid green";
        btn1.style.backgroundColor = "black";
        btn1.style.color = "white";
    }
});
let h2 = document.querySelector("h2");

// h2.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// }



// Event Listners

// node.addEventListner(event,callback)

h2.addEventListener("mouseover",() =>{
    h2.style.color = "red";
});
h2.addEventListener("mouseover",() =>{
    h2.style.backgroundColor = "black";
});
h2.addEventListener("mouseout",() =>{
    h2.style.backgroundColor = "darkgrey";
    h2.style.color = "black";
});
let handler = () =>  {
    console.log("button1 was clicked");
};
h2.addEventListener("mouseover",handler);

h2.removeEventListener("mouseover",handler);


