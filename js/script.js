const btnGaveta1 = document.getElementById('btn-accordion1');
const btnGaveta2 = document.getElementById('btn-accordion2');
const accordion1 = document.getElementById('accordion-1');
const accordion2 = document.getElementById('accordion-2');
const accordionBtnElement1 = document.getElementById('btn-element-action1');
const accordionBtnElement2 = document.getElementById('btn-element-action2');
const accordionTopContent1 = document.getElementById('accordion-top-elements1');
const accordionTopContent2 = document.getElementById('accordion-top-elements2');
const accordionItem = document.querySelectorAll('.accordion2-item-content');
const scrollDownText = document.getElementById('scroll-text');
const arrowDownSymbol = document.getElementById('arrow-symbol')

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

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    if(scrolled>=150){
        scrollDownText.style.fontSize="0px";
    }else {
        scrollDownText.style.fontSize ="9px";
    }

    if(scrolled>=400){
        arrowDownSymbol.style.opacity="0%";
    }else {
        arrowDownSymbol.style.opacity ="100%";
    }
})

const text1 = document.getElementById('list-text1').onmouseover = () =>{
    let marker1 = document.getElementById('list-marker1')
}