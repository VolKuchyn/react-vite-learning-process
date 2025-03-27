import React from "react";
import { Formik, Form, Field } from 'formik';
import s from './ToDoList.module.css';
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { addToDoItem } from "../../redux/todo-reducer";
import ToDoItem from './ToDoItem';
import './todo.css'


const ToDoList = () => {

    const dispatch = useDispatch();
    const toDoS = useSelector((state) => state.todo);


    const createToDoItem = (values) => {
        let toDoItem = {
            id: v4(),
            text: values.taskText,
            completed: false,
        }
        dispatch(addToDoItem(toDoItem));
    };

    const toDosArray = toDoS.toDoItems.map((m) => (
        <ToDoItem key={m.id} id={m.id} text={m.text} completed={m.completed} />
    ));


    return (

        <div>

            <Formik
                initialValues={
                    {
                        taskText: '',
                    }
                }
                onSubmit={(values, { resetForm }) => {
                    createToDoItem(values);
                    resetForm();
                }}>

                <Form>
                    <div className={s.form}>
                        <label htmlFor="taskText">Task: </label>
                        <Field id='taskText' name='taskText' placeholder='Your Task' />
                        <button type="submit">Submit</button>
                    </div>



                </Form>

            </Formik>
            {toDosArray}
        </div>
    )
}

export default ToDoList;