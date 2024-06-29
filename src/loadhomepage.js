import { subMilliseconds } from "date-fns";
import { el } from "date-fns/locale";

const element = document.querySelector('.content');
const bodyElement = document.querySelector('body');

function createHeading() {
    const heading = document.createElement('h1');
    heading.textContent = "Project Overview Page";
    element.appendChild(heading);
}

function createAddProjectButton() {
    const addProjectButton = document.createElement('button');
    const addProjectModal = document.querySelector('.modal');
    addProjectButton.classList.add('add-project-button');
    addProjectButton.addEventListener('click', () => {
        addProjectModal.showModal();
    });
    bodyElement.appendChild(addProjectButton);
}

function createModal() {
    const addProjectModal = document.createElement('dialog');
    addProjectModal.classList.add('modal', 'hidden');

    const modalHeading = document.createElement('p');
    modalHeading.textContent = 'Type in the name of your new project';

    const form = document.createElement('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });
    const textBox = document.createElement('input');
    textBox.type = 'text';

    const submitButton = document.createElement('button');
    submitButton.classList.add('submit-button');
    submitButton.innerText = 'Submit';

    const cancelButton = document.createElement('button');
    cancelButton.classList.add('cancel-button');
    cancelButton.innerText = 'Cancel';

    form.appendChild(modalHeading);
    form.appendChild(textBox);
    form.appendChild(submitButton);
    form.appendChild(cancelButton);
    addProjectModal.appendChild(form);

    bodyElement.appendChild(addProjectModal);
}

function displayProjects() {
    createHeading();
    createModal();
    createAddProjectButton();
}

export { displayProjects };