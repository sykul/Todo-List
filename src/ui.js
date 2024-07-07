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





function saveDescription() {
    let taskIndex = event.target.parentElement.dataset.taskIndex;
    clickedTask.description 
}

function toggleAddProjectModal() {
    const addProjectModel = document.getElementById('addProjectModal');
    addProjectModel.classList.toggle('hidden');
}

export { toggleAddProjectModal, recreateTemplate}