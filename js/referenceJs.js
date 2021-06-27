const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');
const button = document.querySelector('.btn');
const card1 = document.querySelector('.card_inner2');
const about = document.querySelector('#about');
const lady = document.querySelector('.about-left-col img');
const ladySmall = document.querySelector('.icon-container');
const aboutLoremText = document.querySelector('.about-right-col .about-text p');
const span = document.querySelector('.about-right-col .about-text .span');
const spanH1 = document.querySelector('.about-right-col .about-text h1')
const div1 = document.querySelector('.div1 .card_item');
const card2 = document.querySelector('.div1 .card_item .card_inner1');
const card3 = document.querySelector('.div1 .card_item .card_inner2');
const card4 = document.querySelector('.div1 .card_item .card_inner3');
const card5 = document.querySelector('.div1 .card_item .card_inner4');
const span2 = document.querySelector('#section4 .details-right-col .line-choose .line-2');
const span2H1 = document.querySelector('#section4 .details-right-col h1');
const span2Para = document.querySelector('#section4 .details-right-col p');
const span2Lorem = document.querySelector('#section4 .details-right-col #lorem');
const overlap = document.querySelector('#section4 .drawables-container #overlap');
const overlapImage = document.querySelector('#section4 .drawables-container img');
const span2DivStart =  document.querySelector('#section4 .choosers .div2');
const span2DivMiddle =  document.querySelector('#section4 .choosers .div3');
const span2DivEnd =  document.querySelector('#section4 .choosers .div4');
const slenderDiv =  document.querySelector('.section_5 .image_slender .vision_container');
const heading_slender =  document.querySelector('.section_5 .image_slender h1');
const line_medium =  document.querySelector('.section_5 .image_slender .line_section_5 .line_medium');
const alumni_left = document.querySelector('.section_6 .alumni_div .card_column_1');
const alumni_middle = document.querySelector('.section_6 .alumni_div .card_column_2');
const alumni_right = document.querySelector('.section_6 .alumni_div .card_column_3');
const alumni_h1 = document.querySelector('.section_6 .container h1');
const alumni_p = document.querySelector('.section_6 .container p');


const tl = new TimelineMax();
const controller = new ScrollMagic.Controller();
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();
var tl4 = new TimelineMax();
var tl5 = new TimelineMax();
var tl6 = new TimelineMax();
var tl7 = new TimelineMax();

tl.fromTo(hero,1,{height:"0%"},{height:'80%', ease: Power2.easeInOut})
.fromTo(hero,1.2,{width:'100%'},{width:'80%' ,ease: Power2.easeInOu}).
fromTo(slider,1.2,{x:'-100%'},{x: '0%',ease: Power2.easeInOut},'-=1.2').
fromTo(logo,1.2,{opacity:"0", x:"30"},{opacity:'1', x:'0', ease: Power2.easeInOut},"-=.5")
.fromTo(hamburger,1,{opacity:"0", x:"30"},{opacity:'1', x:'0', ease: Power2.easeInOut},"-=1.2").
fromTo(button,1,{opacity:'0', x:'0'},{opacity:'1',y:'-10', ease: Power2.easeInOut},'-=1.2');


tl2.fromTo(lady,.6,{opacity:"0", x:'0'},{opacity:'1',x:'30',ease:Power2.easeInOut}).
fromTo(aboutLoremText,.7,{opacity:"0",x:'0'},{opacity:1,x:'-30',ease:Power2.easeInOut}).fromTo(spanH1,.6,{opacity:"0",x:'0'},{opacity:'1',x:'-10',ease:Power2.easeInOut},'-=.6').fromTo(span,1.2,{opacity:'0',x:'0'},{opacity:'1',x:'60',ease:Power2.easeInOut},'-=1.2');

tl3.fromTo(ladySmall,1.2,{opacity:'0',x:'10'},{opacity:'1',x:'-6'});

tl4.fromTo(div1,1,{height:"0%"},{height:'90%', ease: Power2.easeInOut}).fromTo(card2,1,{opacity:'0', y:'-40'},{opacity:'1',y:'10',ease:Power2.easeInOut}, '-=.5').fromTo(card3,1,{opacity:'0', y:'30'},{opacity:'1',y:'-30',ease:Power2.easeInOut}, '-=1').fromTo(card4,1,{opacity:'0', y:'-40'},{opacity:'1',y:'5',ease:Power2.easeInOut}, '-=1').fromTo(card5,1,{opacity:'0', y:'30'},{opacity:'1',y:'-5',ease:Power2.easeInOut},'-=1');


tl5.fromTo(overlap,.7,{opacity:'0',y:'80'},{opacity:'1',y:'0', ease:Power2.easeInOut}).fromTo
(overlapImage,.7,{opacity:'0',y:'60'},{opacity:'1',y:'0',ease:Power2.easeInOut},'-=.7').
fromTo(span2,1,{opacity:'0',y:'30'},{opacity:'1',y:'0', ease:Power2.easeInOut},'-=.7').fromTo(span2H1,1,{opacity:'0',y:'30'},{opacity:'1',y:'0', ease:Power2.easeInOut},'-=.9').fromTo(span2Para,.8,{opacity:'0',y:'30'},{opacity:'1',y:'0', ease:Power2.easeInOut},'-=1').fromTo(span2Lorem,1,{opacity:'0',y:'40'},{opacity:'1',y:'-10', ease:Power2.easeInOut},'-=.9').fromTo(span2DivStart,1,{opacity:'0',y:'40'},{opacity:'1',y:'-10', ease:Power2.easeInOut},'-=.9').fromTo(span2DivMiddle,1,{opacity:'0',y:'40'},{opacity:'1',y:'-10', ease:Power2.easeInOut},'-=.9').fromTo(span2DivEnd,1,{opacity:'0',y:'40'},{opacity:'1',y:'-10', ease:Power2.easeInOut},'-=.9');

tl6.fromTo(heading_slender,1,{opacity:'0',x:'60'},{opacity:'1',x:'0',ease:Power2.easeInOut}).fromTo(slenderDiv,.8,{opacity:'0',y:'-80'},{opacity:'1',y:'0',ease:Power2.easeInOut},'-=1').fromTo(line_medium,1,{opacity:'0',x:'-60'},{opacity:'1',x:'0',ease:Power2.easeInOut},'-=1');

tl7.fromTo(alumni_left,.7,{opacity:'0',x:'-40'},{opacity:'1',x:'0',ease:Power2.easeInOut}).fromTo(alumni_middle,.7,{opacity:'0',y:'40'},{opacity:'1',y:'0',ease:Power2.easeInOut},'-=.7').fromTo(alumni_right,.7,{opacity:'0',x:'40'},{opacity:'1',x:'0',ease:Power2.easeInOut},'-=.7').fromTo(alumni_h1,.6,{opacity:'0',y:'-40'},{opacity:'1',y:'0',ease:Power2.easeInOut},'-=.7').fromTo(alumni_p,.7,{opacity:'0'},{opacity:'1',ease:Power2.easeInOut});





const scene  = new ScrollMagic.Scene({
    triggerElement: "#about"
}).setTween(tl2).addTo(controller);

const scene2 = new ScrollMagic.Scene(
    {
   triggerElement: ".about-right-col .about-text p"
}).setTween(tl3).addTo(controller);

const scene3 = new ScrollMagic.Scene(
    {
        triggerElement: ".section3"

    }).setTween(tl4).addTo(controller);

const scene4 = new ScrollMagic.Scene(
        {
            triggerElement: "#section4"
    
        }).setTween(tl5).addTo(controller);
 const scene5 = new ScrollMagic.Scene(
     {
        triggerElement: ".section_5"

     }) .setTween(tl6).addTo(controller) ;  
     const scene6 = new ScrollMagic.Scene(
        {
           triggerElement: ".section_6"
   
        }) .setTween(tl7).addTo(controller) ;  