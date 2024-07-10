/*  title, description, dueDate, priority, notes, done */
import './style.css';
import { displayProjectPage } from './loadhomepage.js';
import { createTaskCard, toggleAddProjectModal} from './ui.js';
import { addToLocalStorage, retrieveFromLocalStorage } from './localstoragefunctions.js'

const projects = [];

if (localStorage.getItem('projectArray')) {
    const loadedProjects = retrieveFromLocalStorage('projectArray');
    projects.length = 0;
    projects.push.apply(projects, loadedProjects);
    console.log(projects)
} else {
    projects = []
}


displayProjectPage();

export { projects }