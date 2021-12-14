const hamburgerWrapper = document.querySelector('.hamburger-btn')
const closeWrapper = document.querySelector('.close-btn')
const humbergerMenu = document.querySelector('.nav')
const primaryNav = document.querySelector('.nav-primary-items')
const secondaryNavBtn = document.querySelector('.nav-secondary-items') 
const ctaButtons = document.querySelector('.showcase-cta')
const mainPage = document.querySelector('main')
const typingHeader = document.querySelector('.typing-animation')
/**
 *  Helper functions
*/
const addClass = (elm,className) => {
    elm.classList.add(className)
}

const removeClass = (elm,className) => {
    elm.classList.remove(className)
}
let addScrollTop = (btn) => {
    btn.style.cssText = `display: flex; `
}
let removeScrollTop = (btn) => {
    btn.style.cssText = `display: none; `
}

// Open/Close menu
const openAndClose = (openBtn, close, showMenu)=>{ 
    
    document.addEventListener('click', (e)=>{
        if ( e.target === openBtn || e.target === showMenu
            || e.target === primaryNav 
            || e.target.classList.contains('menu-items')
        ) {
            addClass(openBtn,'hide-h-Btn')
            addClass(close,'show-c-Btn')
            addClass(showMenu,'show-menu')
         
        }else {
            removeClass(openBtn,'hide-h-Btn')
            removeClass(close,'show-c-Btn')
            removeClass(showMenu,'show-menu')
        }
    })
  
}

// Toggle btn state
const toggleLoginBtn = (btn)=> {

    btn.firstElementChild.onmouseover = (e) => {
        addClass(btn.lastElementChild,'btn--login-toggle')
    } 
    btn.firstElementChild.onmouseleave = (e) => {
        removeClass(btn.lastElementChild,'btn--login-toggle')
    }
}
const toggleCtaBtn = (btn)=> {

    btn.lastElementChild.onmouseover = (e) => {
        addClass(btn.firstElementChild,'btn--cta-toggle')
    } 
    btn.lastElementChild.onmouseleave = (e) => {
        removeClass(btn.firstElementChild,'btn--cta-toggle')
    }
}

// Create dynamically menu items
function createMenuItems(prymaryMenu) {
    function createItem(primItemName, seconItems){
        const primItem = document.createElement('div')
        primItem.classList.add('menu-items')
        primItem.innerHTML = 
        `
            <div class="item">
                <h4>${primItemName}</h4>
            </div>
            <div class="sub-menu">
                <ul>
                ${seconItems.map(item => `<li><a href='#${'footer'}'>${item}</a></li>`).join('')}
                </ul>
            </div>
        `
        // console.log(primItem)
        return primItem;
    }

    const Items = {
    product:['overview', 'pricing', 'marketplace','features','integrations'],
    company: ['about', 'team', 'blog','careers'],
    contact: ['contact', 'newsletter', 'linkedIn'],
    }

    const itemsKeys = Object.keys(Items)
    const itemsValues = Object.values(Items)

    for (let i = 0; i <= itemsKeys.length; i++) {
        switch (itemsKeys[i]) {
            case 'product':
                const pItem1 = createItem(itemsKeys[i] , itemsValues[i])
                // console.log(itemsValues[i])
                prymaryMenu.append(pItem1)
            break
            case 'company':
                const pItem2 = createItem(itemsKeys[i] , itemsValues[i])
                prymaryMenu.append(pItem2)
            break
            case 'contact':
                const pItem3 = createItem(itemsKeys[i] , itemsValues[i])
                prymaryMenu.append(pItem3)
            break
        }  
    }
        
    return prymaryMenu;
}

// Handle Scroll Top button
function handleScrollTopBtn() {
    const scrollToTopBtn = document.createElement("div")
        scrollToTopBtn.classList.add("topBtn")
        mainPage.append(scrollToTopBtn)
    
        window.addEventListener("scroll", () => {
        if (window.scrollY >= 400 && window.scrollY !== 0) {
            addScrollTop(scrollToTopBtn)
        } else {
            removeScrollTop(scrollToTopBtn)
        }
    })

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    })
}

// Get Pseudo-element 
// function getRuleWithSelector(selector) {
//     // console.log(document.styleSheets)
//     // let numSheets = document.styleSheets.length
//     // let numRules
//     // let ruleIndex
//     let selectorRule;
//       // for (let sheetIndex = 0; sheetIndex < numSheets; sheetIndex++) {
//         // without knowing the styleSheets and rule numbers we'll need more than 3s to get the element
//         setTimeout(() => {
//             // numRules = document.styleSheets[2].cssRules.length;
//             // for (ruleIndex = 0; ruleIndex < numRules; ruleIndex++) {
//                 if (document.styleSheets[2].cssRules[51].selectorText === selector) {
//                     selectorRule = document.styleSheets[2].cssRules[51]
//                     console.log(selectorRule)
//                     return selectorRule
//                 }
//             // }
//         }, 300);


//         // }
//         // If we get this far, then the rule doesn't exist.
//         setTimeout(() => {
//             selectorRule.style.display = 'none'
//         }, 5000);
// }

// let afterSlidingTagRule = getRuleWithSelector('.typing-animation::after');
function handlePageFunctionality() {
    createMenuItems(primaryNav)
    openAndClose(hamburgerWrapper,closeWrapper,humbergerMenu)
    toggleLoginBtn(secondaryNavBtn)
    toggleCtaBtn(ctaButtons)
    handleScrollTopBtn()
    // getRuleWithSelector(".typing-animation::after")
}

export {handlePageFunctionality}