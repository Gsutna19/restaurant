import { aHome, aMenu, aContact, heading, head2, head3, par, par2, par3, ul, ul2} from './page-load.js';
import './style.css';
import Burger from './burger.jpg';
import Neon from './neonburger.jpg';
import Icecream from './icecream.jpg';
import menuDisplay from './menu.js';
import contactPage from './contact.js';

document.body.appendChild(ul);
function component() {
    const element = document.createElement('div');
    element.setAttribute('id', 'content');

    element.appendChild(heading);
    
    const myBurger = new Image();
    myBurger.src = Burger;
    
    element.appendChild(myBurger);
    element.appendChild(par);
    
    const myNeon = new Image();
    myNeon.src = Neon;
    
    element.appendChild(head2);
    element.appendChild(myNeon);
    element.appendChild(par2);
    const myIcecream = new Image();
    myIcecream.src = Icecream;
    
    element.appendChild(head3);
    element.appendChild(myIcecream);
    element.appendChild(par3);

    return element;
}

let homeEl = component();
let menuEl = menuDisplay();
let contactEl = contactPage();

aHome.onclick = function() {
    homeEl.remove();
    menuEl.remove();
    contactEl.remove();
    document.body.appendChild(homeEl);
    document.body.appendChild(ul2);
}();
aMenu.onclick = function() {
    homeEl.remove();
    menuEl.remove();
    contactEl.remove();
    document.body.appendChild(menuEl);
    document.body.appendChild(ul2);
}
aContact.onclick = function() {
    homeEl.remove();
    menuEl.remove();
    contactEl.remove();
    document.body.appendChild(contactEl);
    document.body.appendChild(ul2);
}