function expandTask() {

}

function createTaskCard(taskObject) {
    const taskCard = document.createElement('div').classList.add('class', `${taskObject.taskIndex}`);
    const content = document.querySelector('.content');
    content.appendChild(taskCard);

}

function saveDescription() {
    let taskIndex = event.target.parentElement.dataset.taskIndex;
    clickedTask.description 
}

export { createTaskCard }