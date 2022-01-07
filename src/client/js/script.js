const hamburgerWrapper = document.querySelector('.hamburger-btn')
const closeWrapper = document.querySelector('.close-btn')
const humbergerMenu = document.querySelector('.menu__content')
const primaryMenuItems = document.querySelector('.menu__primary-items')
const primaryNavItems = document.querySelector('.nav__primary-items')
const secondaryMenuBtn = document.querySelector('.menu__secondary-items') 
const secondaryNavBtn = document.querySelector('.nav__secondary-items') 
const ctaButtons = document.querySelector('.hero__cta')
const mainPage = document.querySelector('main')
const typingHeader = document.querySelector('.typing-animation')
const headers = document.querySelectorAll('.animated-h')
const editorImg = document.querySelectorAll('.animated-img-left')
const laptopImg = document.querySelectorAll('.animated-img-right')
const paragraphs = document.querySelectorAll('p')

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
        primItem.classList.add('items')
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

// Open/Close menu
const openAndClose = (openBtn, close, showMenu)=>{ 
    document.addEventListener('click', (e)=>{
        if ( e.target === openBtn || e.target === showMenu
            || e.target === primaryMenuItems 
            || e.target.classList.contains('items')
            || e.target.classList.contains('item')
            || e.target.nodeName.toLowerCase() === 'h4'
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

// Get Pseudo-element to disable an element
function getRuleWithSelector(selector) {
    // without knowing the styleSheets and rule numbers we'll need more than 3s to get the element
    // Also using for loop to get the numbers matching with selector Propaply will fail in certain cases this project one of them
        // console.log(document.styleSheets[2].cssRules[49].selectorText)
        setTimeout(() => {                    
        if (document.styleSheets[2].cssRules[49].selectorText === selector) {
            let selectorRule = document.styleSheets[2].cssRules[49]
            // console.log(selectorRule)
                return selectorRule ? selectorRule.style.display = 'none' : null
            }
        }, 5000);
}
// Animation on scrolling
const animateSectionsOnScroll = new IntersectionObserver (
    (entries, animateSectionsOnScroll ) => {
        entries.forEach((entry)=> {
            if(!entry.isIntersecting) {
                removeClass(entry.target, 'appear-to-top')
                removeClass(entry.target, 'appear-to-left')
                removeClass(entry.target, 'appear-to-right')
                removeClass(entry.target, 'zoom-out-img')
                return;
            } else {
                if (entry.target.classList.contains('animated-h')) {
                    addClass(entry.target, 'appear-to-top')
                }else if(entry.target.classList.contains('animated-img-left')){
                    addClass(entry.target, 'appear-to-left')
                }else if(entry.target.classList.contains('animated-img-right')){
                    addClass(entry.target, 'appear-to-right')
                }else if(entry.target.nodeName.toLowerCase() === 'p'){
                    addClass(entry.target, 'appear-to-right')
                }else if(entry.target.classList.contains('circle-img')){
                    addClass(entry.target, 'zoom-out-img')
                }
            }
        })

} ,{ // Options
    root:null,
    threshold:0,
    rootMargin:"0px" })
headers.forEach((header)=> {
    animateSectionsOnScroll.observe(header)
})
paragraphs.forEach((p)=> {
    animateSectionsOnScroll.observe(p)
})
editorImg.forEach((img)=> {
    animateSectionsOnScroll.observe(img)
})
laptopImg.forEach((img)=> {
    animateSectionsOnScroll.observe(img)
})

// let afterSlidingTagRule = getRuleWithSelector('.typing-animation::after');
// getRuleWithSelector(".typing-animation::after")
function handlePageFunctionality() {
    createMenuItems(primaryMenuItems)
    createMenuItems(primaryNavItems)
    openAndClose(hamburgerWrapper,closeWrapper,humbergerMenu)
    toggleLoginBtn(secondaryMenuBtn)
    toggleLoginBtn(secondaryNavBtn)
    toggleCtaBtn(ctaButtons)
    getRuleWithSelector('.typing-animation::after')
    handleScrollTopBtn()
}

export {handlePageFunctionality}