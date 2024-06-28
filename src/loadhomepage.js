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
        addProjectModal.classList.toggle('hidden');
    });
    bodyElement.appendChild(addProjectButton);
}

function createModal() {
    const addProjectModal = document.createElement('div');
    addProjectModal.classList.add('modal', 'hidden');

    const textBox = document.createElement('input');
    textBox.type = 'text';
    addProjectModal.appendChild(textBox);

    bodyElement.appendChild(addProjectModal);
}

function displayProjects() {

    createHeading();

    createModal();

    createAddProjectButton();

}

export { displayProjects };