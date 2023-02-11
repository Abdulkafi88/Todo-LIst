// function todo(){
// let newp=document.createElement('p')
// let value=document.getElementById('input').value
// let addTextNode=document.createTextNode(value)
// newp.appendChild(addTextNode)
// newp.addEventListener('click',function(){
//     newp.style.textDecoration='line-through'
// })
// newp.addEventListener('dblclick',function(){
//     newp.removeChild(addTextNode)
// })
// if(value===''){
//     alert('add new Task')
// }
// else{
//     document.getElementById('list').appendChild(newp)
    
// }
// document.getElementById('input').value=''
// }

// same thing 




const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}




