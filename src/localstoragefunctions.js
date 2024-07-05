import { ProjectObject } from './project class';

function addToLocalStorage(thingToAdd) {
    localStorage.setItem(`${Object.keys({thingToAdd})[0]}`, JSON.stringify(thingToAdd));
}

function retrieveFromLocalStorage(thingToRetrieve) {
    const retrievedProjects = JSON.parse(localStorage.getItem(thingToRetrieve));
    retrievedProjects.forEach((project) => {
        Object.setPrototypeOf(project, ProjectObject.prototype); 
    });
    return retrievedProjects;
}

export { addToLocalStorage, retrieveFromLocalStorage }