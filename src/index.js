/*  title, description, dueDate, priority, notes, done */
import './style.css';
import 'date-fns';
import { TaskObject } from './task.js';
import { displayProjects } from './loadhomepage.js';
import { displayTasks } from './loadprojectpage.js';
import { createTaskCard } from './ui.js';
import { addToLocalStorage, retrieveFromLocalStorage } from './localstoragefunctions.js'

const testObject = new TaskObject('testname', 'testproject', "id" + Math.random().toString(16).slice(2));

addToLocalStorage(testObject);
let retrievedObject = retrieveFromLocalStorage(testObject);

displayProjects();
console.log(`testObject: ${testObject.taskName}`);
/* createTaskCard(testObject); */
console.log(`retrievedObject: ${retrievedObject.taskName}`);
