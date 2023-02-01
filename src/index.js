import {heading, par, ul} from './page-load.js';
import './style.css';
import Burger from './burger.jpg';

function component() {
    const element = document.getElementById('content');

    element.appendChild(ul);
    element.appendChild(heading);
    element.appendChild(par);

    const myBurger = new Image();
    myBurger.src = Burger;

    element.appendChild(myBurger);

    return element;
}
document.body.appendChild(component());
// console.log('Importing content form page-load')
