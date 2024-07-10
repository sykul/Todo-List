import { ProjectObject } from './project class';
import { TaskObject } from './task class';

function addToLocalStorage(thingToAdd, thingName) {
    localStorage.setItem(`${thingName}`, JSON.stringify(thingToAdd));
}

function retrieveFromLocalStorage(thingToRetrieve) {
    const retrievedProjects = JSON.parse(localStorage.getItem(thingToRetrieve));
    retrievedProjects.forEach((project) => {
        Object.setPrototypeOf(project, ProjectObject.prototype); 
        project.taskList.forEach((task) => {
            Object.setPrototypeOf(task, TaskObject.prototype);
        })
    });

    return retrievedProjects;
}

export { addToLocalStorage, retrieveFromLocalStorage }