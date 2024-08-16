import { useEffect, useState } from "react";
import "./Todo.css";
import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
export const Todo = () => {

    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);
    const [dateTime, setDateTime] = useState("");
    useEffect(() => {
        let interval = setInterval(() => {
            const currentDate = new Date();
            const todaysDate = currentDate.toLocaleDateString();
            const todaysTime = currentDate.toLocaleTimeString();
            setDateTime(`${todaysDate}- ${todaysTime}`)
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    const handleInputChange = (value) => {
        setInputValue(value)
    };
    const handleFormSubmit = (event) => {
        event.preventDefault()

        if (!inputValue) return;
        if (task.includes(inputValue)) {
            setInputValue("")
            return
        }
        setTask((previousData) => [...previousData, inputValue]);
        setInputValue("")
    };
    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <h2 className="date-time">{dateTime}</h2>
            </header>
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" className="todo-input" autoComplete="on" value={inputValue} onChange={(event) => handleInputChange(event.target.value)} />
                    </div>
                    <div>
                        <button type="submit">
                            Add task
                        </button>
                    </div>
                </form>
            </section>
            <section className="myUnOrdList">
                <ul>{task.map((curEle, index) => {
                    return (
                        <li key={index} className="todo-item">
                            <span>{curEle}</span>
                            <button className="check-btn"><FaCheckCircle /></button>
                            <button className="delete-btn"><MdDeleteForever /></button>
                        </li>
                    )
                })}</ul>
            </section>
        </section>
    )
}