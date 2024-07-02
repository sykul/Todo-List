import { th } from "date-fns/locale";

class ProjectObject {
    constructor(projectName) {
        this.projectName = projectName;
        this.projectIndex = "id" + Math.random().toString(16).slice(2);
        this.taskList = [];
    }

    addTaskToProject(task) {
        this.taskList.push(task);
    }

    removeTaskFromProject(task) {
        this.taskList.splice(task, 1);
    }

}

export { ProjectObject }