
// Global Varibles 

const humbergerNav = document.querySelector('.nav-bar')

const hamburgerbtn = document.querySelector('.hamburger-btn'); 
const closeHamburgerbtn = document.querySelector('.close-btn'); 

const ctaBotton = document.querySelector('.secondary-nav');


// Helper function

const addClass = (elm,className) => {
    elm.classList.add(className);
}

const removeClass = (elm,className) => {
    elm.classList.remove(className);
}


// Main scripts

//
const openAndClose = ()=>{ 
    
    hamburgerbtn.onclick = () => {
        addClass(hamburgerbtn,'open-state');
        addClass(closeHamburgerbtn,'close-state');
        addClass(humbergerNav,'show-nav');
    }

    closeHamburgerbtn.onclick = () => {
        removeClass(hamburgerbtn,'open-state');
        removeClass(closeHamburgerbtn,'close-state');
        removeClass(humbergerNav,'show-nav');
    }
}
openAndClose();


const toggleBtnStatu = ()=> {

    ctaBotton.firstElementChild.onmouseover = (e) => {
        addClass(ctaBotton.lastElementChild,'toggle-statu');
    }

    ctaBotton.firstElementChild.onmouseleave = (e) => {
        removeClass(ctaBotton.lastElementChild,'toggle-statu');
    }
}
toggleBtnStatu();