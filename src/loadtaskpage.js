import { projects } from "./index"
import { subMilliseconds } from "date-fns";
import { el } from "date-fns/locale";
import { addToLocalStorage } from "./localstoragefunctions.js";
import { displayProjectPage } from './loadhomepage.js';
import { recreateTemplate } from './ui.js';

const element = document.querySelector('.content');
const bodyElement = document.querySelector('body');

function createHeading(name) {
    const heading = document.createElement('h1');
    const element = document.querySelector('.content');
    heading.textContent = `${name}`;
    bodyElement.prepend(heading);
}

function createBackButton() {
    const backButton = document.createElement('button');
    backButton.classList.add('back-button');
    backButton.textContent = 'Back';
    backButton.addEventListener('click', () => {
        projects.forEach((object) => {
            if (object.isActive === true) {
                object.isActive = false;
            };
        });
        console.log(projects)
        displayProjectPage();
    })
    document.querySelector('body').prepend(backButton);
}

function createTaskCard(taskObject) {
    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card');
    taskCard.setAttribute('id', `${taskObject.taskIndex}`);
    taskCard.addEventListener('click', () => {
        console.log('hi');
    });

    const content = document.querySelector('.content');
    content.appendChild(taskCard);
}

function listTaskCards(project) {
    console.log('listtaskcards run')
    console.log(project.taskList)
    for (let item of project.taskList) {
        createTaskCard(item);
    }
}

function displayTaskPage(project, name) {
    console.log('displaytaskpage run');
    console.log(project)
    recreateTemplate();
    const element = document.querySelector('.content');
    element.classList.add('task-area');
    createHeading(project.projectName);
    createBackButton();
    listTaskCards(project);
}

export { displayTaskPage };