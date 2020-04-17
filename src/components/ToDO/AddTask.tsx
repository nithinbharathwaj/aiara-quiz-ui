import React, {FormEvent, useState} from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {ToDoService} from "../../services/ToDoService";

export const AddTask = () => {
    const [task, setTask] = useState('');

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!task) {
            alert('Task is required');
            return;
        }

        ToDoService.getInstance().createTask(task);
    }

    return <div className='margin-top-10'>
        <Form onSubmit={submit}>
            <FormGroup>
                <Label for="exampleEmail">Task</Label>
                <Input value={task} onChange={event => setTask(event.target.value)} required className='fixed-width-input' name="task" placeholder="Task to add"/>
            </FormGroup>
            <Button size={'sm'} color='dark'>Add</Button>
        </Form>
    </div>
}
