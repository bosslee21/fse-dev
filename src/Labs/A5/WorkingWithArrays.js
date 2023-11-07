import React, { useState, useEffect } from "react";
import axios from "axios";
function WorkingWithArrays() {

    const API = "http://localhost:4000/a5/todos";

    const [id, setId] = useState(1);
    const [title, setTitle] = useState("empty")
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });

    const [todo2, setTodo2] = useState([]);



    const fetchTodosOld = () => {
        // Web browser in asynchronous mode
        // once we get a response from the server
        const promise = axios.get(API);
        // we then execute the function passed to then and the response passed into it
        // response is the response from the server
        promise.then((response) => {

            //setting the data to the state variable state cause to rerednder and it cause funtion to be called
            // thus it will cause an infinite loop/ useEffect hook prevent this
            setTodo2(response.data);
        })
    }
    //useEffect hook only run once(dafault) when the component is rendered
    useEffect(() => {
        fetchTodos();
        // fetchTodosOld();

    }, [])
    // Empty array is to show that we want to run this function only on change.
    // of there is [variable] then it will run when the variable changes

    // compiler do the promise and then for us
    const fetchTodos = async () => {
        const response = await axios.get("http://localhost:4000/a5/todos");
        setTodo2(response.data);
    }

    const createTodo = async () => {
        const response = await axios.get("http://localhost:4000/a5/todos/create");
        setTodo2(response.data);

    }
    const postTodo = async () => {
        const response = await axios.post("http://localhost:4000/a5/todos", {
            title: title,
        });
        setTodo2(response.data);

    }
    const removeTodo = async (id) => {
        const response = await axios.get(`${API}/${id}/delete`);
        setTodo2(response.data);
    }
    const deleteTodo = async (id) => {
        const response = await axios.delete(`${API}/${id}`);
        setTodo2(response.data);
    }

    const updateTodo = async (id, title) => {
        const response = await axios.get(`${API}/${id}/title/${title}`);
        setTodo2(response.data);
    }

    return (
        <div>
            <h1>Todos from Server</h1>
            <button className="btn btn-primary" onClick={createTodo}>Create Todo</button>
            <button className="btn btn-primary" onClick={postTodo}>PostT Todo</button>

            <button className="btn btn-warning" onClick={() => updateTodo(id, title)}>update Title</button>
            <input
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)} />

            <ul className="list-group">
                {todo2.map((tdo) => (
                    <li className="list-group-item" key={tdo.id}>
                        <button className="btn btn-danger float-end" onClick={() => deleteTodo(tdo.id)}>Delete Todo</button>

                        {tdo.title}
                        id = {tdo.id}
                    </li>
                ))}

            </ul>

            <h3>Working with Arrays</h3>

            <h4>Retrieving Arrays</h4>
            <a href={API} className="btn btn-primary me-2">
                Get Todos
            </a>


            <h4>Creating new Items in an Array</h4>
            <a href={`${API}/create`}
                className="btn btn-primary me-2">
                Create Todo
            </a>
            <h4>Retrieving an Item from an Array by ID</h4>
            <input className="form-control"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />

            <a href={`${API}/${id}`}
                className="btn btn-primary me-2">
                Get Todo by ID
            </a>

            <h3>Filtering Array Items When Completed is true</h3>
            <a href={`${API}?completed=true`}
                className="btn btn-primary me-2" >
                Get Completed Todos
            </a>


            <h4>update Title</h4>
            <input className="form-control"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <a href={`${API}/${id}/title/${title}`}
                className="btn btn-primary me-2">
                Update Title </a>

            <input
                value={todo.id}
                placeholder="Enter ID"
                onChange={(e) => setTodo({
                    ...todo, id: e.target.value
                })}
                className="form-control mb-2"
                type="number"
            />
            <h3>Deleting from an Array</h3>
            <a href={`${API}/${todo.id}/delete`}
                className="btn btn-primary me-2">
                Delete Todo with ID = {todo.id}
            </a>



            <input
                value={todo.title}
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value
                })}
                className="form-control mb-2"
                type="text"
            />
            <h3>Updating an Item in an Array</h3>
            <a
                href={`${API}/${todo.id}/title/${todo.title}`}
                className="btn btn-primary me-2" >
                Update Title to {todo.title}
            </a>

            <h3>Extra Credit completed</h3>
            <h4>update description and checkbox for completed.</h4>

            <input className="form-control"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <a href={`${API}/${id}/title/${title}`}
                className="btn btn-primary me-2">
                Update description </a>

            <input className="form-check-input" type="checkbox" onChange={(e) => setTodo
                ({ ...todo, completed: e.target.value })} />
            Press this to change completed status



            {/*  check this 
            <a href={`${API}/${id}`}
                className="btn btn-primary me-2">
                Get Todo by ID
            </a>
            <input className="form-control"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <a href={`${API}/${id}/title/${title}`}
                className="btn btn-primary me-2">
                Update Title </a> */}


        </div >
    );
}
export default WorkingWithArrays;