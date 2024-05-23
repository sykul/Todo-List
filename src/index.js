/*  title, description, dueDate, priority, notes, done */
import './style.css';
import 'date-fns';
import { TaskObject } from './task.js'

const task1 = new TaskObject('example name');

console.log(task1);
task1.setTaskName = "testest";
console.log(task1.getTaskName);
console.log(task1.taskName);