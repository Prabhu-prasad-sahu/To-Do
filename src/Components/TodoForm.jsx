import { useState } from "react";

export const TodoForm = ({ onSubmitClick }) => {

    const [inputValue, setInputValue] = useState({});
    const handleInputChange = (value) => {
        setInputValue({ id: value, content: value, checked: false })
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmitClick(inputValue);
        setInputValue({ id: "", content: "", checked: "" });
    };
    return (
        <section className="form">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type="text" className="todo-input" autoComplete="on" value={inputValue.content} onChange={(event) => handleInputChange(event.target.value)} />
                </div>
                <div>
                    <button type="submit">
                        Add task
                    </button>
                </div>
            </form>
        </section>
    );
};