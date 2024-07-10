/*  title, description, dueDate, priority, notes, done */
import './style.css';
import { TaskObject } from './task class.js';
import { ProjectObject } from './project class.js';
import { displayProjectPage } from './loadhomepage.js';
import { displayTaskPage } from './loadtaskpage.js';
import { createTaskCard, toggleAddProjectModal} from './ui.js';
import { addToLocalStorage, retrieveFromLocalStorage } from './localstoragefunctions.js'

const projects = [];

displayProjectPage();

export { projects }