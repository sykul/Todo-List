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
    addProjectModal.classList.add('modal');

    const modalHeading = document.createElement('label');
    modalHeading.htmlFor = 'modalTextbox';
    modalHeading.textContent = 'Type in the name of your new project';

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
    submitButton.innerText = 'Submit';
    submitButton.addEventListener('click', () => {
        
    })

    const cancelButton = document.createElement('button');
    cancelButton.classList.add('cancel-button');
    cancelButton.type = 'button';
    cancelButton.innerText = 'Cancel';
    cancelButton.addEventListener('click', () => {
        addProjectModal.close();
        textBox.value = '';
    })

    form.appendChild(modalHeading);
    form.appendChild(textBox);
    form.appendChild(submitButton);
    form.appendChild(cancelButton);
    addProjectModal.appendChild(form);

    addProjectModal.addEventListener("click", e => {
        const dialogDimensions = addProjectModal.getBoundingClientRect()
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
            addProjectModal.close();
            textBox.value = '';
        }
      })

    bodyElement.appendChild(addProjectModal);
}

function displayProjects() {
    createHeading();
    createModal();
    createAddProjectButton();
}

export { displayProjects };