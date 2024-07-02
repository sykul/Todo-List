class ProjectObject {
    constructor(projectName) {
        this.projectName = projectName;
        this.projectIndex = "id" + Math.random().toString(16).slice(2);
        this.taskList = [];
    }


}

export { ProjectObject }