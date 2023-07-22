let burger =document.querySelector(".burger");
let links =document.querySelector(".nav-links");
let textarea =document.querySelector(".text-center");
let btn =document.querySelector(".btn");
burger.addEventListener('click',()=>{
    links.classList.toggle("nav-show");
    textarea.classList.toggle("textareahide");
    btn.classList.toggle("btn");
})

