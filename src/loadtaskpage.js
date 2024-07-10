import { projects } from "./index"
import { subMilliseconds } from "date-fns";
import { el } from "date-fns/locale";
import { addToLocalStorage } from "./localstoragefunctions.js";
import { displayProjectPage } from './loadhomepage.js';
import { recreateTemplate } from './ui.js';
import { TaskObject } from "./task class.js";

const element = document.querySelector('.content');
const bodyElement = document.querySelector('body');

function createModal() {
    const addTaskModal = document.createElement('dialog');
    addTaskModal.classList.add('modal');
    const activeProject = projects.filter(project => project.isActive)[0];

    const modalHeading = document.createElement('label');
    modalHeading.htmlFor = 'modalTextbox';
    modalHeading.textContent = 'Type in the name of your new task';

    const form = document.createElement('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });
    const textBox = document.createElement('input');
    textBox.id = 'modalTextbox';
    textBox.name = 'projectName';
    textBox.type = 'text';
    textBox.minLength = '1';
    textBox.maxLength = '20';
    textBox.required = true;

    const submitButton = document.createElement('button');
    submitButton.classList.add('submit-button');
    submitButton.type = 'button';
    submitButton.innerText = 'Submit';
    submitButton.addEventListener('click', (e) => {
        if (textBox.checkValidity() === true) {
            const tasks = activeProject.taskList;
            const newTask = new TaskObject(textBox.value);  
            tasks.push(newTask);
            addToLocalStorage(projects, 'projectArray');
            displayTaskPage(activeProject);
        }
    });

    const cancelButton = document.createElement('button');
    cancelButton.classList.add('cancel-button');
    cancelButton.type = 'button';
    cancelButton.innerText = 'Cancel';
    cancelButton.addEventListener('click', () => {
        addTaskModal.close();
        textBox.value = '';
    })

    form.appendChild(modalHeading);
    form.appendChild(textBox);
    form.appendChild(submitButton);
    form.appendChild(cancelButton);
    addTaskModal.appendChild(form);

    addTaskModal.addEventListener("click", e => {
        const dialogDimensions = addTaskModal.getBoundingClientRect()
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
            addTaskModal.close();
            textBox.value = '';
        }
      })

    bodyElement.appendChild(addTaskModal);
}

function createAddTaskButton() {
    const addTaskButton = document.createElement('button');
    const addTaskModal = document.querySelector('.modal');
    addTaskButton.classList.add('add-project-button');
    addTaskButton.addEventListener('click', () => {
        addTaskModal.showModal();
    });
    bodyElement.appendChild(addTaskButton);
}

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
    const activeProject = projects.filter(project => project.isActive)[0];

    const left = document.createElement('div');
    left.classList.add('task-left');
    const topLeft = document.createElement('div')
    topLeft.classList.add('task-top-left');
    const bottomLeft = document.createElement('div');
    bottomLeft.classList.add('task-top-right');
    const right = document.createElement('div');
    right.classList.add('task-right');

    const doneSwitch = document.createElement('input');
    doneSwitch.type = 'checkbox';
    doneSwitch.name = "doneSwitch";
    doneSwitch.classList.add("done-switch");
    doneSwitch.id = `doneSwitch + ${taskObject.taskIndex}`;
    doneSwitch.addEventListener('click', (e) => {
        e.preventDefault();
        const tasks = activeProject.taskList;
        const taskID = e.currentTarget.parentNode.parentNode.parentNode.id;
        const task = tasks.filter(task => task.taskIndex == taskID)[0];
        task.toggleTaskComplete();
        console.log(task)
    })
    const doneSwitchLabel = document.createElement('label');
    doneSwitchLabel.textContent = 'Completed? ';
    doneSwitchLabel.htmlFor = 'doneSwitch';

    const taskHeading = document.createElement('h3');
    taskHeading.textContent = `${taskObject.taskName}`;

    const notes = document.createElement('textarea');
    notes.name = "notes";
    notes.classList.add("notes-textbox");
    notes.id = `notes + ${taskObject.taskIndex}`;
    notes.addEventListener('input', (e) => {
        const tasks = activeProject.taskList;
        const taskID = e.currentTarget.parentNode.parentNode.parentNode.id;
        const task = tasks.filter(task => task.taskIndex == taskID)[0];
        task.description = notes.value;
        console.log(task);
    });
    const notesLabel = document.createElement('label');
    notesLabel.textContent = 'Description: ';
    notesLabel.htmlFor = 'notes';

    const dateSelector = document.createElement('input');
    dateSelector.type = 'date';
    dateSelector.name = "date";
    dateSelector.classList.add("date-selector");
    dateSelector.id = 'date';
    dateSelector.value = taskObject.dueDate;
    dateSelector.addEventListener(
        'input', (e) => {
        const tasks = activeProject.taskList;
        const taskID = e.currentTarget.parentNode.parentNode.id;
        const task = tasks.filter(task => task.taskIndex == taskID)[0];
        task.dueDate = dateSelector.value;
        console.log(projects);
    });
    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Due: ';
    dateLabel.htmlFor = 'date';

    const prioritySelector = document.createElement('select');
    const priorityValues = ["low", "medium", "high"];
    prioritySelector.name = "priority";
    prioritySelector.classList.add("priority");
    prioritySelector.id = 'prioritySelector';
    for (let val of priorityValues) {
        const option = document.createElement('option');
        option.value = val;
        option.text = val;
        prioritySelector.appendChild(option);
    }
    prioritySelector.options[1].selected = true;
    prioritySelector.addEventListener(
        'input', (e) => {
        const tasks = activeProject.taskList;
        const taskID = e.currentTarget.parentNode.parentNode.id;
        const task = tasks.filter(task => task.taskIndex == taskID)[0];
        task.priority = prioritySelector.value;
        console.log(projects);
    });
    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority: ';
    priorityLabel.htmlFor = 'prioritySelector';
    

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.classList.add('task-delete-button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', (e) => {
        const tasks = activeProject.taskList;
        const taskID = e.currentTarget.parentNode.parentNode.id;
        activeProject.taskList = tasks.filter(task => task.taskIndex != taskID);
        displayTaskPage(activeProject);
    })

    topLeft.appendChild(taskHeading);
    topLeft.appendChild(doneSwitchLabel);
    topLeft.appendChild(doneSwitch);
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

    const content = document.querySelector('.content');
    content.appendChild(taskCard);
}

function listTaskCards(project) {
    console.log('listtaskcards run');
    console.log(project.taskList);
    for (let item of project.taskList) {
        createTaskCard(item);
    }
}

function displayTaskPage(project) {
    console.log('displaytaskpage run');
    console.log(project);
    recreateTemplate();
    const element = document.querySelector('.content');
    element.classList.add('task-area');
    createHeading(project.projectName);
    createBackButton();
    listTaskCards(project);
    createModal();
    createAddTaskButton();
}

export { displayTaskPage };