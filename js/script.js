const btnGaveta1 = document.getElementById('btn-accordion1');
const btnGaveta2 = document.getElementById('btn-accordion2');
const btnAccordionMobile1 = document.getElementById('btn-accordion1-mobile');
const btnAccordionMobile2 = document.getElementById('btn-accordion2-mobile');
const accordion1 = document.getElementById('accordion-1');
const accordion2 = document.getElementById('accordion-2');
const AccordionMobile1 = document.getElementById('accordion-3-mobile');
const AccordionMobile2 = document.getElementById('accordion-4-mobile');
const accordionBtnElement1 = document.getElementById('btn-element-action1');
const accordionBtnElement2 = document.getElementById('btn-element-action2');
const accordionBtnElementMobile1 = document.getElementById('btn-element-action1-mobile');
const accordionBtnElementMobile2 = document.getElementById('btn-element-action2-mobile');
const accordionTopContent1 = document.getElementById('accordion-top-elements1');
const accordionTopContent2 = document.getElementById('accordion-top-elements2');
const accordionTopContentMobile1 = document.getElementById('accordion-top-elements-mbl-1');
const accordionTopContentMobile2 = document.getElementById('accordion-top-elements-mbl-2');
const scrollDownText = document.getElementById('scroll-text');
const arrowDownSymbol = document.getElementById('arrow-symbol');
const screenSize = window.innerWidth;

accordionTopContent1.onclick = function () {
    if (accordion1.style.height == '') {

        if (screenSize < 500) {
            accordion1.setAttribute('style', 'height: 650px');
        } else {
            accordion1.setAttribute('style', 'height: 382px');
        }
        accordionTopContent1.setAttribute('style', 'color: var(--magenta)');
        accordionBtnElement1.setAttribute('style', 'transform: rotate(0deg)');
    } else {
        accordion1.removeAttribute('style', 'height: 382px!important');
        accordionBtnElement1.removeAttribute('style', 'transform: rotate(0deg)');
        accordionTopContent1.removeAttribute('style', 'color: var(--magenta)')
    }

};


accordionTopContent2.onclick = function () {
    if (accordion2.style.height == '') {
        if (screenSize < 500) {
            accordion2.setAttribute('style', 'height: 650px');
        } else {
            accordion2.setAttribute('style', 'height: 519px');
        }
        accordionTopContent2.setAttribute('style', 'color: var(--magenta)');
        accordionBtnElement2.setAttribute('style', 'transform: rotate(0deg)');
    } else {
        accordion2.removeAttribute('style', 'height: 519px');
        accordionBtnElement2.removeAttribute('style', 'transform: rotate(0deg)');
        accordionTopContent2.removeAttribute('style', 'color: var(--magenta)');
    }
};

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    if (scrolled >= 150) {
        scrollDownText.style.fontSize = "0px";
    } else {
        scrollDownText.style.fontSize = "9px";
    }

    if (scrolled >= 400) {
        arrowDownSymbol.style.opacity = "0%";
    } else {
        arrowDownSymbol.style.opacity = "100%";
    }
})

accordionTopContentMobile1.onclick = function () {
    if (AccordionMobile1.style.height == '') {
        AccordionMobile1.setAttribute('style', 'height: 480px');
        accordionBtnElementMobile1.setAttribute('style', 'transform: rotate(0deg)');
    } else {
        AccordionMobile1.removeAttribute('style', 'height: 382px!important');
        accordionTopContentMobile1.removeAttribute('style', 'transform: rotate(0deg)');
    }
};
accordionTopContentMobile2.onclick = function () {
    if (AccordionMobile2.style.height == '') {
        AccordionMobile2.setAttribute('style', 'height: 480px');
        accordionBtnElementMobile2.setAttribute('style', 'transform: rotate(0deg)');
    } else {
        AccordionMobile2.removeAttribute('style', 'height: 382px!important');
        accordionTopContentMobile2.removeAttribute('style', 'transform: rotate(0deg)');
    }
};