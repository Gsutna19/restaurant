import {heading, par} from './page-load.js';

function component() {
    const element = document.getElementById('content');

    element.appendChild(heading);
    element.appendChild(par);

    return element;
}
document.body.appendChild(component());
// console.log('Importing content form page-load')
