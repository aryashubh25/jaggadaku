


let menu = document.getElementById("menu-btn");
let close = document.getElementById("close-btn");
let linksdrop = document.getElementById("droplinks");
let doge = document.querySelector("body");
let navpug = document.getElementById("navbar");

menu.addEventListener("click", function pug(){
    linksdrop.style.top = "45px";
    close.style.display = "block";
    menu.style.display = "none";
    navpug.style.background = "black";

});

close.addEventListener("click", function pug2(){
    linksdrop.style.top = "-1057px";
    close.style.display = "none";
    menu.style.display = "block";
    navpug.style.background = "transparent";
});

