class TaskObject {
    constructor(taskName) {
        this.taskName = taskName;
    }

    get getTaskName() {
        return this.taskName;
    }

    set setTaskName(value) {
        this.taskName = value;
    }

}

export { TaskObject }