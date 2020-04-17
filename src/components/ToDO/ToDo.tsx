import React, {FC, useEffect, useState} from "react";
import {ToDoImpl} from "../../interfaces/ToDoImpl";
import {ToDoService} from "../../services/ToDoService";
import {Button, Card, CardBody, CardText, CardTitle, Container} from "reactstrap";
import {AddTask} from "./AddTask";

export const ToDo: FC = () => {
    const [tasks, setTasks] = useState<ToDoImpl[]>([]);

    const deleteTask = (uuid: string) => {
        ToDoService.getInstance().deleteTaskFromAPI(uuid);
    }

    useEffect(() => {
        ToDoService.getInstance().getTasksFromAPI();
        const tasksSubscription = ToDoService.getInstance().getToDoTasks().subscribe(items => setTasks(items));

        return () => {
            tasksSubscription.unsubscribe();
        }
    }, []);

    return <Container>
        <h1 className='head-text'>Add Task</h1>
        <AddTask />
        <h1 className='head-text'>To Do Tasks</h1>
        {tasks.length === 0 ? <div>
            <p>No To Do Tasks to display. Add one below</p>
        </div> : <div className='margin-top-10'>
            {tasks.map((task, i) => <Card className='margin-top-10' key={task.uuid}>
                <CardBody>
                    <CardTitle>Task {i + 1}</CardTitle>
                    <CardText>{task.text}</CardText>
                    <Button onClick={() => deleteTask(task.uuid)} size='sm' color='danger'>Delete</Button>
                </CardBody>
            </Card>)}
        </div>}
    </Container>
}
