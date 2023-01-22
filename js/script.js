const btnGaveta1 = document.getElementById('btn-accordion1');
const btnGaveta2 = document.getElementById('btn-accordion2');
const accordion1 = document.getElementById('accordion-1');
const accordion2 = document.getElementById('accordion-2');
const accordionBtnElement1 = document.getElementById('btn-element-action1');
const accordionBtnElement2 = document.getElementById('btn-element-action2');
const accordionTopContent1 = document.getElementById('accordion-top-elements1');
const accordionTopContent2 = document.getElementById('accordion-top-elements2');
const accordionItem = document.getElementsByClassName('accordion2-item-content');


accordionTopContent1.onclick = function(){
    if(accordion1.style.height == '') {
        accordion1.setAttribute('style', 'height: 382px');
        accordionTopContent1.setAttribute('style', 'color: var(--magenta)');
        accordionBtnElement1.setAttribute('style', 'transform: rotate(0deg)');
    }else {
        accordion1.removeAttribute('style', 'height: 382px!important');
        accordionBtnElement1.removeAttribute('style', 'transform: rotate(0deg)');
        accordionTopContent1.removeAttribute('style', 'color: var(--magenta)')
    }
    
};


accordionTopContent2.onclick = function(){
    if(accordion2.style.height == '') {
        accordion2.setAttribute('style', 'height: 519px');
        accordionTopContent2.setAttribute('style', 'color: var(--magenta)');
        accordionBtnElement2.setAttribute('style', 'transform: rotate(0deg)');
    }else {
        accordion2.removeAttribute('style', 'height: 519px');
        accordionBtnElement2.removeAttribute('style', 'transform: rotate(0deg)');
        accordionTopContent2.removeAttribute('style', 'color: var(--magenta)');
    }
    
};


