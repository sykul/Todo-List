import { subMilliseconds } from "date-fns";
import { el } from "date-fns/locale";
import { ProjectObject } from "./project class";
import { projects } from "./index"
import { addToLocalStorage } from "./localstoragefunctions";
import { displayProjectPage } from './loadhomepage.js';
import { recreateTemplate } from './ui.js';

const element = document.querySelector('.content');
const bodyElement = document.querySelector('body');

function createHeading(name) {
    const heading = document.createElement('h1');
    const element = document.querySelector('.content');
    heading.textContent = `${name}`;
    element.appendChild(heading);
}

function createBackButton() {
    const backButton = document.createElement('button');
    backButton.classList.add('back-button');
    backButton.textContent = 'Back';
    backButton.addEventListener('click', () => {
        displayProjectPage();
    })
    document.querySelector('body').prepend(backButton);
}

function displayTaskPage(project, name) {
    recreateTemplate();
    createBackButton();
    createHeading(name);
}

export { displayTaskPage };