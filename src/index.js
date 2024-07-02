/*  title, description, dueDate, priority, notes, done */
import './style.css';
import 'date-fns';
import { TaskObject } from './task class.js';
import { ProjectObject } from './project class.js';
import { displayProjects } from './loadhomepage.js';
import { displayTasks } from './loadprojectpage.js';
import { createTaskCard, toggleAddProjectModal} from './ui.js';
import { addToLocalStorage, retrieveFromLocalStorage } from './localstoragefunctions.js'
import { te } from 'date-fns/locale';

const projects = []

displayProjects();

document.querySelector('.modal').showModal();

const project1 = new ProjectObject('project1');
const task1 = new TaskObject('task1','project1');
const task2 = new TaskObject('task2','project1');
project1.addTaskToProject(task1);
project1.addTaskToProject(task2);
console.log(project1);
project1.removeTaskFromProject(task1)