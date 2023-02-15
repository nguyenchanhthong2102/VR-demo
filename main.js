const cursor=document.querySelector('.cursor');
const logo=document.querySelector('.logo');
const nav=document.querySelector('.nav_item');
const slider=document.getElementById('slider-image');

const inputSearch=document.querySelector('.input-search');
inputSearch.addEventListener('keyup',function(e){
    console.log(e.target.value);
})


document.addEventListener('mousemove',function(e){
    cursor.style.top=e.pageY +'px';
    cursor.style.left=e.pageX+'px';
})

logo.addEventListener('mouseover',function(){
    cursor.classList.add('active');
})
logo.addEventListener('mouseleave',function(){
    cursor.classList.remove('active');
})

nav.addEventListener('mouseover',function(){
    cursor.classList.add('active');
})
nav.addEventListener('mouseleave',function(){
    cursor.classList.remove('active');
})
const menuService=document.querySelector('.item-service');
const service=document.querySelector('#service');
const Close=document.querySelector('.close');
menuService.addEventListener('click',function(){
    service.style.display='block';
})
Close.addEventListener('click',function(){
    service.style.display='none';
})
const menu=document.querySelector('.menu-bar');
const navItem=document.querySelector('.nav_item');
menu.addEventListener('click',function(){
navItem.classList.toggle('active');
})