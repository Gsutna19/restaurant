import './style.css';

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

    head3.textContent = "Hostess Lasagna";
    element.appendChild(head3);

    head4.textContent = "Waiter Dumplings";
    element.appendChild(head4);

    return element;
}