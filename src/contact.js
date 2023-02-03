import './style.css';
import Chef from './spaghetti.jpg';
import Hostess from './lasagna.jpg';
import Waiter from './dumplings.jpg';

export default function contactPage() {
    const element = document.createElement('div');
    element.setAttribute('id', 'content');

    const heading = document.createElement('h1');
    const head2 = document.createElement('h2');
    const head3 = document.createElement('h2');
    const head4 = document.createElement('h2');
    const par = document.createElement('p');
    const par2 = document.createElement('p');
    const par3 = document.createElement('p');

    heading.textContent = "Contact Us";
    element.appendChild(heading);

    head2.textContent = "Chef Spaghetti";
    element.appendChild(head2);
    const myChef = new Image();
    myChef.src = Chef;
    element.appendChild(myChef);
    par.innerHTML = "13 years being best Chef. Contact to compliment: <br>123-456-7890<br>email@restaurant.com";
    element.appendChild(par);
    
    head3.textContent = "Hostess Lasagna";
    element.appendChild(head3);
    const myHostess = new Image();
    myHostess.src = Hostess;
    element.appendChild(myHostess);
    par2.innerHTML = "For reservations <br>Call: 123-456-7890<br>or<br>Email: email@restaurant.com";
    element.appendChild(par2);
    
    head4.textContent = "Waiter Dumplings";
    element.appendChild(head4);
    const myWaiter = new Image();
    myWaiter.src = Waiter;
    element.appendChild(myWaiter);
    par3.innerHTML = "7 years being the best waiter in town. If you want me to wait <br>call: 123-456-7890<br>or<br>email: email@restaurant.com";
    element.appendChild(par3);

    return element;
}