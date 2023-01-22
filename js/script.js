const btnGaveta1 = document.getElementById('btn-accordion1');
const btnGaveta2 = document.getElementById('btn-accordion2');
const accordion1 = document.getElementById('accordion-1');
const accordion2 = document.getElementById('accordion-2');
const accordionBtnElement1 = document.getElementById('btn-element-action1');
const accordionBtnElement2 = document.getElementById('btn-element-action2');


btnGaveta1.onclick = function(){
    if(accordion1.style.height == '') {
        accordion1.setAttribute('style', 'height: 382px');
        accordionBtnElement1.setAttribute('style', 'transform: rotate(0deg)');
    }else {
        accordion1.removeAttribute('style', 'height: 382px');
        accordionBtnElement1.removeAttribute('style', 'transform: rotate(0deg)');
    }
    
};


btnGaveta2.onclick = function(){
    if(accordion2.style.height == '') {
        accordion2.setAttribute('style', 'height: 432px');
        accordionBtnElement2.setAttribute('style', 'transform: rotate(0deg)');
    }else {
        accordion2.removeAttribute('style', 'height: 432px');
        accordionBtnElement2.removeAttribute('style', 'transform: rotate(0deg)');
    }
    
};
