/*  title, description, dueDate, priority, notes, done */
import './style.css';
import 'date-fns';
import { TaskObject } from './task.js';
import { displayProjects } from './loadhomepage.js';
import { displayTasks } from './loadprojectpage.js';

const task1 = new TaskObject('example name');

displayProjects();