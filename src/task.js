class TaskObject {
    constructor(taskName) {
        this.taskName = taskName;
        this.taskComplete = false;
        this.description = "";
        this.dueDate = new Date();
        this.priority = 'default';
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