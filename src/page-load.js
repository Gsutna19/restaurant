export { heading, par, ul }

const heading = document.createElement('h1');
const par = document.createElement('p');
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
par.innerHTML = "The restaurant is great! 10/10 would eat here again.";