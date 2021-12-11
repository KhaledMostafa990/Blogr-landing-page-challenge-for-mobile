/**
 *  Helper functions
*/
const addClass = (elm,className) => {
    elm.classList.add(className);
}

const removeClass = (elm,className) => {
    elm.classList.remove(className);
}

function createImagesElmInsideOtherElm (elm, className, src, appendTo,place) {
    elm = document.createElement(elm)
    elm.classList.add(className)
    elm.src = src;
    appendTo.insertAdjacentElement(place, elm)
    return elm;
}



// Open/Close menu
const openAndClose = (openBtn, close, showMenu)=>{ 
    
    openBtn.onclick = () => {
        addClass(openBtn,'hide-Btn');
        addClass(close,'show-Btn');
        addClass(showMenu,'show-menu');
    }

    close.onclick = () => {
        removeClass(openBtn,'hide-Btn');
        removeClass(close,'show-Btn');
        removeClass(showMenu,'show-menu');
    }
}
// Toggle btn state
const toggleBtnStatu = (Botton)=> {

    Botton.firstElementChild.onmouseover = (e) => {
        addClass(Botton.lastElementChild,'toggle-statu');
    } 

    Botton.firstElementChild.onmouseleave = (e) => {
        removeClass(Botton.lastElementChild,'toggle-statu');
    }
}

    function createMenuItems(prymaryMenu) {
        function createItem(primItemName, seconItems){
        const primItem = document.createElement('div')
        primItem.classList.add('menu-items')
        primItem.innerHTML = 
        `
            <div class="item">
                <h4 href="#">${primItemName}</h4>
            </div>
            <div class="sub-menu">
                <ul>
                ${seconItems.map(item => `<li><a href='#'>${item}</a></li>`).join('')}
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

export {createImagesElmInsideOtherElm,openAndClose,toggleBtnStatu, createMenuItems}