import { el } from "date-fns/locale";

function displayProjects() {
    const element = document.querySelector('.content');

    const heading = document.createElement('h1');
    heading.textContent = "Project Overview Page";
    element.appendChild(heading);


}

export { displayProjects };