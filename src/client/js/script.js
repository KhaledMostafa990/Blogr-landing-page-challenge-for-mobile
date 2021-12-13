const hamburgerWrapper = document.querySelector('.hamburger-btn')
const closeWrapper = document.querySelector('.close-btn')
const humbergerMenu = document.querySelector('.nav')
const primaryNav = document.querySelector('.nav-primary-items')
const secondaryNavBtn = document.querySelector('.nav-secondary-items') 
const ctaButtons = document.querySelector('.showcase-cta')
const headerbg = document.querySelector('.header-bg')
/**
 *  Helper functions
*/
const addClass = (elm,className) => {
    elm.classList.add(className);
}

const removeClass = (elm,className) => {
    elm.classList.remove(className);
}

// Open/Close menu
const openAndClose = (openBtn, close, showMenu)=>{ 
    
    openBtn.onclick = () => {
        addClass(openBtn,'hide-h-Btn');
        addClass(close,'show-c-Btn');
        addClass(showMenu,'show-menu');

        setTimeout(() => {
            headerbg.onmousedown = ()=> {
                removeClass(openBtn,'hide-h-Btn');
                removeClass(close,'show-c-Btn');
                removeClass(showMenu,'show-menu');
            }
        }, 200)
        
    }
    
    close.onclick = () => {
        removeClass(openBtn,'hide-h-Btn');
        removeClass(close,'show-c-Btn');
        removeClass(showMenu,'show-menu');
    }
 
}

// Toggle btn state
const toggleLoginBtn = (btn)=> {

    btn.firstElementChild.onmouseover = (e) => {
        addClass(btn.lastElementChild,'btn--login-toggle');
    } 
    btn.firstElementChild.onmouseleave = (e) => {
        removeClass(btn.lastElementChild,'btn--login-toggle');
    }
}
const toggleCtaBtn = (btn)=> {

    btn.lastElementChild.onmouseover = (e) => {
        addClass(btn.firstElementChild,'btn--cta-toggle');
    } 
    btn.lastElementChild.onmouseleave = (e) => {
        removeClass(btn.firstElementChild,'btn--cta-toggle');
    }
}

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
            console.log(primItem)
            return primItem;
        }

        const Items = {
        product:['overview', 'pricing', 'marketplace','features','integrations'],
        company: ['about', 'team', 'blog','careers'],
        contact: ['contact', 'newsletter', 'linkedIn'],
        }

        const itemsKeys = Object.keys(Items);
        const itemsValues = Object.values(Items);

        for (let i = 0; i <= itemsKeys.length; i++) {
            switch (itemsKeys[i]) {
                case 'product':
                    const pItem1 = createItem(itemsKeys[i] , itemsValues[i])
                    // console.log(itemsValues[i])
                    prymaryMenu.insertAdjacentElement('beforeend', pItem1)
                break;
                case 'company':
                    const pItem2 = createItem(itemsKeys[i] , itemsValues[i])
                    prymaryMenu.insertAdjacentElement('beforeend', pItem2)
                break;
                case 'contact':
                    const pItem3 = createItem(itemsKeys[i] , itemsValues[i])
                    prymaryMenu.insertAdjacentElement('beforeend', pItem3)
                break;
                default:
                    break;
            }  
        }
        
        return prymaryMenu;
    }

    function handleMenuFunctionalities() {
        createMenuItems(primaryNav)
        openAndClose(hamburgerWrapper,closeWrapper,humbergerMenu)
        toggleLoginBtn(secondaryNavBtn)
        toggleCtaBtn(ctaButtons)
    }

export {handleMenuFunctionalities}