import { el } from "date-fns/locale";

function displayProjects() {
    const element = document.querySelector('.content');
    const bodyElement = document.querySelector('body');

    const heading = document.createElement('h1');
    heading.textContent = "Project Overview Page";
    element.appendChild(heading);

    const addProjectModal = document.createElement('div');
    addProjectModal.classList.add('modal', 'hidden');
    bodyElement.appendChild(addProjectModal);

    const addProjectButton = document.createElement('button');
    addProjectButton.classList.add('add-project-button');
    bodyElement.appendChild(addProjectButton);

}

export { displayProjects };