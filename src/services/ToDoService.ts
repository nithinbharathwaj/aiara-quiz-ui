import {BehaviorSubject} from "rxjs";
import {ToDoImpl} from "../interfaces/ToDoImpl";
import {ApiService} from "./ApiService";

export class ToDoService {
    private static readonly toDoService = new ToDoService();
    private toDoTasks = new BehaviorSubject<ToDoImpl[]>([]);
    private gotTasks = false;

    public getToDoTasks = () => {
        return this.toDoTasks;
    }

    public setToDoTasks = (tasks: ToDoImpl[]) => {
        return this.toDoTasks.next(tasks);
    }

    public getTasksFromAPI = async (force = false) => {
        if (force || !this.gotTasks) {
            const url = 'http://localhost:8000/to-do';
            const headers = {
                Accept: "application/json", "Content-Type": "application/json"
            };

            try {
                const result = await new ApiService().get<ToDoImpl[]>(url, headers);
                this.setToDoTasks(result);
                this.gotTasks = true;
            } catch (e) {
                console.error(e);
            }
        }
    }

    public deleteTaskFromAPI = async (uuid: string) => {
        const url = `http://localhost:8000/to-do/${uuid}`;
        try {
            const result = await new ApiService().delete<any>(url);
            this.getTasksFromAPI(true);
            alert('Task Deleted');
        } catch (e) {
            console.error(e);
            alert('Task deletion failed');
        }
    }

    public createTask = async (text: string) => {
        const url = 'http://localhost:8000/to-do';
        const headers = {
            Accept: "application/json", "Content-Type": "application/json"
        };
        const dataToSubmit = {
            text,
        }

        try {
            const result = await new ApiService().post<ToDoImpl>(url, dataToSubmit, headers);
            this.getTasksFromAPI(true);
            alert('Task created');
        } catch (e) {
            console.error(e);
            alert('Task creation failed');
        }
    }

    public static getInstance() {
        return this.toDoService;
    }
}
