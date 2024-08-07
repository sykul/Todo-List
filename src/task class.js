import { format } from 'date-fns';

class TaskObject {
    constructor(taskName, project) {
        this.taskName = taskName;
        this.parentProject = project;
        this.taskComplete = false;
        this.description = "";
        this.dueDate = format(new Date(), 'yyyy-MM-dd');
        this.priority = 'medium';
        this.taskIndex = "id" + Math.random().toString(16).slice(2);
    }

    get getTaskName() {
        return this.taskName;
    }

    set setTaskName(value) {
        this.taskName = value;
    }

    toggleTaskComplete() {
        this.taskComplete = !this.taskComplete;
    }
}

export { TaskObject }