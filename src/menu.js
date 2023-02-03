import './style.css';
import Cheeseburger from './1200burger.jpg';
import Macaroni from './macncheese.jpg';
import Salmon from './1200Kloe.jpg';

export default function menuDisplay() {

    const element = document.createElement('div');
    element.setAttribute('id', 'content');
    const heading = document.createElement('h1');
    const head2 = document.createElement('h2');
    const head3 = document.createElement('h2');
    const head4 = document.createElement('h2');
    const par = document.createElement('p');
    const par2 = document.createElement('p');
    const par3 = document.createElement('p');

    heading.textContent = "Menu";
    element.appendChild(heading);

    head2.textContent = "Classic Burger - 10";
    element.appendChild(head2);
    const myCheeseburger = new Image();
    myCheeseburger.src = Cheeseburger;

    par.textContent = "Two cloud-soft buns, lettuce, tomatoes, onions, pickles, with mayo and ketchup, and a slice of mozzarela cheese, all on top of a 100% pure beef patty that'll melt in your mouth.";
    element.appendChild(myCheeseburger);
    element.appendChild(par);

    head3.textContent = "Mac'n Cheese - 8";
    element.appendChild(head3);
    const myMacaroni = new Image();
    myMacaroni.src = Macaroni;

    par2.textContent = "Classic macaroni in a 4-cheese blend, served in a sizzlin' hot skillet.";
    element.appendChild(myMacaroni);
    element.appendChild(par2);

    head4.textContent = "Salmon Lemon - 15";
    element.appendChild(head4);
    const mySalmon = new Image();
    mySalmon.src = Salmon;

    par3.textContent = "Two Salmon fillets cooked to perfection on a lemon paprika sauce.";
    element.appendChild(mySalmon);
    element.appendChild(par3);

    return element;
}