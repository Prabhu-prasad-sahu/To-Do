import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
export const TodoList = ({ checked, data, onCheckClick, onDeleteClick }) => {
    return (
        <li className="todo-item">
            <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
            <button className="check-btn" onClick={() => onCheckClick(data)}><FaCheckCircle /></button>
            <button className="delete-btn" onClick={() => onDeleteClick(data)}><MdDeleteForever /></button>
        </li>
    );
};