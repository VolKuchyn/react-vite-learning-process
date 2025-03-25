import React from "react";
import { useDispatch } from "react-redux";
import s from './ToDoItem.module.css';
import { toggleCompletedTodo, deleteToDo } from "../../redux/todo-reducer";

const ToDoItem = (props) => {

    const dispatch = useDispatch();

    const switchComplete = (id) => {
        dispatch(toggleCompletedTodo(id));
    }

    const deleteToDoItem = (id) => {
        dispatch(deleteToDo(id));
    }


    return (
        <div>

            <button onClick={() => switchComplete(props.id)} className={props.completed ? s.completedButton : s.uncompletedButton}>{props.completed ? "Completed" : "In progress"}</button>
            <span className={s.itemText}>{props.text}</span>
            <button onClick={() => deleteToDoItem(props.id)} className={s.deleteButton}>Delete</button>

        </div>);
}

export default ToDoItem;