import { subMilliseconds } from "date-fns";
import { el } from "date-fns/locale";
import { ProjectObject } from "./project class";
import { projects } from "./index"
import { addToLocalStorage } from "./localstoragefunctions";

const element = document.querySelector('.content');
const bodyElement = document.querySelector('body');

function createHeading() {
    const heading = document.createElement('h1');
    heading.textContent = "Tasks Page";
    element.appendChild(heading);
}

function createBackButton() {
    const backButton = document.createElement('button');
    document.querySelector('body').appendChild(backButton);
}

function displayTaskPage() {
    createHeading();
    createBackButton();
}

export { displayTaskPage };