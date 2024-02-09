import './index.scss';

let divHello = document.createElement('div');

divHello.textContent = "Hello Webpack";
divHello.classList.add("hello");

document.body.append(divHello);
