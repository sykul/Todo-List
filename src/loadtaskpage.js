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

    const left = document.createElement('div');
    left.classList.add('task-left');
    const topLeft = document.createElement('div')
    topLeft.classList.add('task-top-left');
    const bottomLeft = document.createElement('div');
    bottomLeft.classList.add('task-top-right');
    const right = document.createElement('div')
    right.classList.add('task-right');

    const doneButton = document.createElement('button');
    doneButton.type = 'button';

    const taskHeading = document.createElement('h3');
    taskHeading.textContent = `${taskObject.taskName}`;

    const notes = document.createElement('textarea');

    const dateSelector = document.createElement('input');
    dateSelector.type = 'date';
    dateSelector.name = "date";
    dateSelector.classList.add("date-selector");
    dateSelector.id = 'date'
    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Due: ';
    dateLabel.htmlFor = 'date';

    const prioritySelector = document.createElement('select');
    const priorityValues = ["low", "medium", "high"];
    prioritySelector.name = "priority";
    prioritySelector.classList.add("priority");
    prioritySelector.id = 'prioritySelector'
    for (let val of priorityValues) {
        const option = document.createElement('option');
        option.value = val;
        option.text = val;
        prioritySelector.appendChild(option);
    }
    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority: ';
    priorityLabel.htmlFor = 'prioritySelector';

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.classList.add('task-delete-button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', () => {
        console.log('delete');
    })

    topLeft.appendChild(doneButton);
    topLeft.appendChild(taskHeading);
    left.appendChild(topLeft);
    
    bottomLeft.appendChild(notes);
    left.appendChild(bottomLeft);

    taskCard.appendChild(left);

    right.appendChild(dateLabel);
    right.appendChild(dateSelector);
    right.appendChild(priorityLabel);
    right.appendChild(prioritySelector);
    right.appendChild(deleteButton);
    taskCard.appendChild(right);

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