/*  title, description, dueDate, priority, notes, done */
import './style.css';
import 'date-fns';
import { TaskObject } from './task.js';
import { displayProjects } from './loadhomepage.js';
import { displayTasks } from './loadprojectpage.js';
import { createTaskCard } from './ui.js';

const task1 = new TaskObject('example name');

displayProjects();
console.log(new TaskObject('testname', 'testproject', "id" + Math.random().toString(16).slice(2)))
createTaskCard(new TaskObject('testname', 'testproject', "id" + Math.random().toString(16).slice(2)));