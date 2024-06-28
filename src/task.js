class TaskObject {
    constructor(taskName, project, taskIndex) {
        this.taskName = taskName;
        this.parentProject = project;
        this.taskComplete = false;
        this.description = "";
        this.dueDate = new Date();
        this.priority = 'default';
        this.taskIndex = taskIndex;
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