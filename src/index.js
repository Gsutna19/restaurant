import { aHome, aMenu, aContact, heading, head2, head3, par, par2, par3, ul, ul2} from './page-load.js';
import './style.css';
import Burger from './burger.jpg';
import Neon from './neonburger.jpg';
import Icecream from './icecream.jpg';
import menuDisplay from './menu.js';

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

    // document.body.appendChild(element);

    return element;
}
// aHome.onclick = component();
// See project instructions for functionality
aHome.onclick = document.body.appendChild(component());
aMenu.onclick = menuDisplay;

document.body.appendChild(ul2);
