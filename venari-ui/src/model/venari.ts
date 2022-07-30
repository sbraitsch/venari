import type { Task } from "./task";

export class Venari {
    name: string;
    tasks: Task[];

    constructor(name: string, tasks: Task[]) {
        this.name = name;
        this.tasks = tasks;
    }
}