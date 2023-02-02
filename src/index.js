import {heading, head2, head3, par, par2, par3, ul, ul2} from './page-load.js';
import './style.css';
import Burger from './burger.jpg';
import Neon from './neonburger.jpg';
import Icecream from './icecream.jpg';

function component() {
    const element = document.getElementById('content');

    document.body.appendChild(ul);
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
document.body.appendChild(component());
document.body.appendChild(ul2);
// console.log('Importing content form page-load')
