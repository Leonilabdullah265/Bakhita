const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');
const button = document.querySelector('.btn');
const menu  = document.querySelector('#mobile-menu');
const menu__links  = document.querySelector('.navbar__menu');
const menu__logo  = document.querySelector('.navbar__logo');
const body  = document.querySelector('body');

const tl = new TimelineMax();
const controller = new ScrollMagic.Controller();

//Displaying mobile menu
const mobile__menu=()=>
{
    menu.classList.toggle('is-active')
    menu__links.classList.toggle('active')
    body.classList.toggle('active')
}
menu.addEventListener('click', mobile__menu)

tl.fromTo(hero,1,{height:"0%"},{height:'80%', ease: Power2.easeInOut})
.fromTo(hero,1.2,{width:'100%'},{width:'80%' ,ease: Power2.easeInOu}).
fromTo(slider,1.2,{x:'-100%'},{x: '0%',ease: Power2.easeInOut},'-=1.2').
fromTo(logo,1.2,{opacity:"0", x:"30"},{opacity:'1', x:'0', ease: Power2.easeInOut},"-=.5")
.fromTo(hamburger,1,{opacity:"0", x:"30"},{opacity:'1', x:'0', ease: Power2.easeInOut},"-=1.2").
fromTo(button,1,{opacity:'0', x:'0'},{opacity:'1',y:'-10', ease: Power2.easeInOut},'-=1.2');
