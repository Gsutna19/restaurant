export { heading, head2, head3, par, par2, par3, ul }

const heading = document.createElement('h1');
const head2 = document.createElement('h2');
const head3 = document.createElement('h2');
const par = document.createElement('p');
const par2 = document.createElement('p');
const par3 = document.createElement('p');
const ul = document.createElement('ul');
const li = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');

ul.classList.add('header');

li.textContent = 'Home';
li2.textContent = 'Menu';
li3.textContent = 'Contact Us';

ul.appendChild(li);
ul.appendChild(li2);
ul.appendChild(li3);

heading.innerHTML = "Welcome to Restaurant!";
head2.innerHTML = "Menu";
head3.innerHTML = "Contact Us";
par.innerHTML = "The restaurant is great! 10/10 would eat here again.";
par2.innerHTML = "Check out our Heavenly Menu!";
par3.innerHTML = "But if you still have questions contact our team.";