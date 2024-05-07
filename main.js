function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  })};

let menu=document.querySelector('#menu-bars');
let navbar=document.querySelector('.navbar');

menu.onclick = () =>{
menu.classList.toggle('fa-times')
navbar.classList.toggle('active');
}

window.onscroll = () =>{
menu.classList.remove('fa-times')
navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

document.querySelector('.fas fa-shopping-cart').onclick = () =>{
  document.querySelector('sidebar').classList.toggle('active');
}
document.querySelector('.fas fa-times').onclick = () =>{
  document.querySelector('sidebar').classList.remove('active');
}
