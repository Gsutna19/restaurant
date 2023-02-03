export { aHome, aMenu, aContact, heading, head2, head3, head4, par, par2, par3, ul, ul2 }

const heading = document.createElement('h1');
const head2 = document.createElement('h2');
const head3 = document.createElement('h2');
const head4 = document.createElement('h2');
const par = document.createElement('p');
const par2 = document.createElement('p');
const par3 = document.createElement('p');
const ul = document.createElement('ul');
const li = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const ul2 = document.createElement('ul');
const li4 = document.createElement('li');
const li5 = document.createElement('li');

const aHome = document.createElement('a');
const aMenu = document.createElement('a');
const aContact = document.createElement('a');

ul.classList.add('header');
ul2.classList.add('header');

aHome.textContent = 'Home';
aMenu.textContent = 'Menu';
aContact.textContent = 'Contact Us';

aHome.title = "Home page for Restaurant";
aMenu.title = "Food menu for Restaurant";
aContact.title = "Contact Us info";

aHome.href = "../dist/index.html";
aMenu.href = "#";
aContact.href = "#";
// MAke li's the link and not just the text inside.
li.appendChild(aHome);
li2.appendChild(aMenu);
li3.appendChild(aContact);

li4.textContent = 'Gsutna19 2023';
li5.textContent = 'Images found on Unsplash';

li4.classList.add('foot');
li5.classList.add('foot');

ul.appendChild(li);
ul.appendChild(li2);
ul.appendChild(li3);
ul2.appendChild(li4);
ul2.appendChild(li5);

heading.textContent = "Welcome to Restaurant!";
head2.textContent = "Menu";
head3.textContent = "Contact Us";
par.textContent = '"The restaurant is great! 10/10 would eat here again." Gal Fiery';
par2.textContent = "Check out our Heavenly Menu!";
par3.textContent = "But if you still have questions contact our team.";