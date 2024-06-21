function expandTask() {

}

function createTaskCard(taskObject) {
    const taskCard = document.createElement('div')
    taskCard.classList.add('task-card', `${taskObject.taskIndex}`);
    taskCard.addEventListener('click', (e) => console.log(e.target))

    const content = document.querySelector('.content');
    content.appendChild(taskCard);
}

function saveDescription() {
    let taskIndex = event.target.parentElement.dataset.taskIndex;
    clickedTask.description 
}

export { createTaskCard }