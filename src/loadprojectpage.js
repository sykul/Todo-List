

function createTaskCard(taskObject) {
    const taskName = taskObject.taskName;
    const date = taskObject.dueDate;

}

function displayTasks() {
    backButton = document.createElement('button');
    document.querySelector('body').appendChild(document.createElement('button'));
    const element = document.querySelector('.content');

    const heading = document.createElement('h1');
    heading.textContent = "Tasks Page";
    element.appendChild(heading);

    

}

export { displayTasks };