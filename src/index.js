/*  title, description, dueDate, priority, notes, done */
import './style.css';
import 'date-fns';
import { TaskObject } from './task class.js';
import { ProjectObject } from './project class.js';
import { displayProjectPage } from './loadhomepage.js';
import { displayTaskPage } from './loadtaskpage.js';
import { createTaskCard, toggleAddProjectModal} from './ui.js';
import { addToLocalStorage, retrieveFromLocalStorage } from './localstoragefunctions.js'
import { te } from 'date-fns/locale';

const projects = [];


const project1 = new ProjectObject('project1');
projects.push(project1);
const task1 = new TaskObject('task1','project1');
const task2 = new TaskObject('task2','project1');
project1.addTaskToProject(task1);
project1.addTaskToProject(task2);
const project2 = new ProjectObject('project2');
projects.push(project2);

displayProjectPage();
const projectCard = document.querySelector('.project-card')
projectCard.dispatchEvent(new Event('click'))


export { projects }