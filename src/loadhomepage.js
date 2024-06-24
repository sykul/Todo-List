import { el } from "date-fns/locale";

function displayProjects() {
    const element = document.querySelector('.content');
    const bodyElement = document.querySelector('body');

    const heading = document.createElement('h1');
    heading.textContent = "Project Overview Page";
    element.appendChild(heading);

    const addProjectButton = document.createElement('button');
    addProjectButton.classList.add('add-project-button');
    bodyElement.appendChild(addProjectButton);

}

export { displayProjects };