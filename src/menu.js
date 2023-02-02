import { heading, head2, head3, par, par2, par3, ul, ul2} from './page-load.js';
import './style.css';
import Cheeseburger from './1200burger.jpg';
import Macaroni from './macncheese.jpg';
import Salmon from './1200Kloe.jpg';

export default function menuDisplay() {

    const element = document.createElement('div');
    element.setAttribute('id', 'content');

    heading.innerHTML = "Menu";
    element.appendChild(heading);

    const myCheeseburger = new Image();
    myCheeseburger.src = Cheeseburger;

    par.innerHTML = "Two cloud-soft buns, lettuce, tomatoes, onions, pickles, with mayo and ketchup, and a slice of mozzarela cheese, all on top of a 100% pure beef patty that'll melt in your mouth."
    element.appendChild(myCheeseburger);
    element.appendChild(par);

    const myMacaroni = new Image();
    myMacaroni.src = Macaroni;

    element.appendChild(myMacaroni);

    const mySalmon = new Image();
    mySalmon.src = Salmon;

    element.appendChild(mySalmon);

    document.body.appendChild(element);
    // return element;
}