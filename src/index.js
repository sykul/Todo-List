/*  title, description, dueDate, priority, notes, done */
import './style.css';
import 'date-fns';
import { TaskObject } from './task.js';
import { displayProjects } from './loadhomepage.js';
import { displayTasks } from './loadprojectpage.js';
import { createTaskCard, toggleAddProjectModal} from './ui.js';
import { addToLocalStorage, retrieveFromLocalStorage } from './localstoragefunctions.js'
import { te } from 'date-fns/locale';

const tasks = [];

const testObject = new TaskObject('testname', 'defaultProject');
tasks.push(testObject);
const testObject1 = new TaskObject('testname1', 'defaultProject');
tasks.push(testObject1);

addToLocalStorage(tasks);
let retrievedArray = retrieveFromLocalStorage(tasks);
console.log(tasks);
console.log(retrievedArray);

displayProjects();
createTaskCard(testObject);
createTaskCard(testObject1);

testObject.taskName = 'test name';
testObject1.taskName = 'test name 1';
console.log(tasks);
console.log(retrievedArray);

const addProjectModal = document.querySelector('.modal');
addProjectModal.showModal();