import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setTodo, updateTodo } from "./TodosReducers";


function TodoForm() {
    const todo = useSelector((state) => state.todosReducer.todo);
    const dispatch = useDispatch();
    return (
        <li className="list-group-item">
            <button onClick={() => dispatch(addTodo(todo))}>Add</button>
            <button onClick={() => dispatch(updateTodo(todo))}>
                Update </button>
            <input
                value={todo.title}
                onChange={(e) =>
                    dispatch(setTodo({
                        ...todo,
                        title: e.target.value,
                    })
                    )
                }
            />
        </li>
    );
}
export default TodoForm;