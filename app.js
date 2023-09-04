
// Start  menu toggle 

let menuIcon = document.querySelector(".header .fa-bars");
let closeIcon = document.querySelector(".header .fa-xmark");
let list = document.querySelector(".header .links ul");


menuIcon.addEventListener("click",function(){
list.style.right="0px";
menuIcon.style.display="none";
});

closeIcon.addEventListener("click",function(){
    list.style.right="-414px";
    menuIcon.style.display="block";
});

function removLink(){
    list.style.right="-414px";
    menuIcon.style.display="block";
}
// End menu toggle 