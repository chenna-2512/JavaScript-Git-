let chmode = document.querySelector("#btn1");
let body = document.querySelector("body");
let curmode = "light";

chmode.addEventListener("click",() => {
    if(curmode==="light"){
        curmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        curmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(curmode);
});