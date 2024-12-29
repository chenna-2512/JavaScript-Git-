let divs = document.querySelectorAll(".box");
console.dir(divs);

let idx = 0;
for(div of divs){
    div.innerText = `new value of ${idx}`;
    idx++;
}