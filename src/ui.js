import { projects } from './index'
import { displayTaskPage } from './loadtaskpage'

function expandTask() {

}

function recreateTemplate() {
    const bodyElement = document.querySelector('body');
    bodyElement.replaceChildren();
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');
    bodyElement.appendChild(contentDiv);
}

function createProjectCard(projectObject) {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    projectCard.setAttribute('id', `${projectObject.projectIndex}`);
    projectCard.textContent = `${projectObject.projectName}`
    projectCard.addEventListener('click', (e) => {
        const id = e.target.id;
        const matchingProject = projects.filter((project) => project.projectIndex === id)[0];
        matchingProject.activateProject();
        const projectName = matchingProject.projectName;
        displayTaskPage(matchingProject, projectName);
        console.log(matchingProject);
    });

    const content = document.querySelector('.content');
    content.appendChild(projectCard);
}

function createTaskCard() {
    
}

function saveDescription() {
    let taskIndex = event.target.parentElement.dataset.taskIndex;
    clickedTask.description 
}

function toggleAddProjectModal() {
    const addProjectModel = document.getElementById('addProjectModal');
    addProjectModel.classList.toggle('hidden');
}

export { createProjectCard, toggleAddProjectModal, recreateTemplate}