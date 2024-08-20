import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDateTime } from "./TodoDateTime";
import { ToDoClear } from "./TodoClear";
import {getLocalStorageTodoData,setLocalStorageTodo} from "./TodoLocalStorage";

export const Todo = () => {
    const [task, setTask] = useState(getLocalStorageTodoData);
    const handleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;
        if (!content) return;
        const ifTodoContentMatched = task.find((curTask) => curTask.content === content);
        if (ifTodoContentMatched) return;
        setTask((previousData) => [...previousData, { id, content, checked }]);
    };
    setLocalStorageTodo(task);

    const handelDeleteTask = (value) => {
        const updateedValue = task.filter((curValue) => curValue.content != value);
        setTask(updateedValue)
    }
    const handleCheckTask = (value) => {
        const updateTask = task.map((curData) => {
            if (curData.content === value) {
                return { ...curData, checked: !curData.checked }
            } else {
                return curData;
            }
        })

        setTask(updateTask)
    }
    const handleClearAll = () => {
        setTask([])
    };

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <TodoDateTime />
            </header>
            <TodoForm onSubmitClick={handleFormSubmit} />
            <section className="myUnOrdList">
                <ul>{task.map((curEle) => {
                    return <TodoList
                        key={curEle.id}
                        data={curEle.content}
                        checked={curEle.checked}
                        onCheckClick={handleCheckTask}
                        onDeleteClick={handelDeleteTask} />
                })}</ul>
            </section>
            <ToDoClear onClearButton={() => { handleClearAll() }} />
        </section>
    )
}