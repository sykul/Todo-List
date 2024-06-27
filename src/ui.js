function expandTask() {

}

function createTaskCard(taskObject) {
    const taskCard = document.createElement('div')
    taskCard.classList.add('task-card');
    taskCard.setAttribute('id', `${taskObject.taskIndex}`);
    taskCard.addEventListener('click', (e) => {
        console.log(e.target.id);
    });

    const content = document.querySelector('.content');
    content.appendChild(taskCard);
}

function saveDescription() {
    let taskIndex = event.target.parentElement.dataset.taskIndex;
    clickedTask.description 
}

function toggleAddProjectModal() {
    const addProjectModel = document.getElementById('addProjectModal');
    addProjectModel.classList.toggle('hidden');
}

export { createTaskCard, toggleAddProjectModal}