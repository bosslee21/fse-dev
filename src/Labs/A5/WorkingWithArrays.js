import React, { useState, useEffect } from "react";
import axios from "axios";
function WorkingWithArrays() {
    const [errorMessage, setErrorMessage] = useState(null);


    // const API = "http://localhost:4000/a5/todos";
    const API = "https://kanbas-server-app.onrender.com/a5/todos";


    const [id, setId] = useState(1);
    const [title, setTitle] = useState("empty")
    const [description, setDescription] = useState("new Description")
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
        const response = await axios.get("https://kanbas-server-app.onrender.com/a5/todos");
        setTodo2(response.data);
    }

    const createTodo = async () => {
        const response = await axios.get("https://kanbas-server-app.onrender.com/a5/todos/create");
        setTodo2(response.data);

    }
    const postTodo = async () => {
        const response = await axios.post("https://kanbas-server-app.onrender.com/a5/todos", {
            title: title,
        });
        setTodo2(response.data);

    }
    // this is old method of delete
    const removeTodo = async (id) => {
        const response = await axios.get(`${API}/${id}/delete`);
        setTodo2(response.data);
    }
    const deleteTodo = async (id) => {
        try {
            const response = await axios.delete(`${API}/${id}`);
            setTodo2(response.data);
        } catch (error) {
            console.log(error)
            setErrorMessage(error.response.data.message);
        }
    }
    // old method of update. 
    const updateTodo = async (id, title) => {
        const response = await axios.get(`${API}/${id}/title/${title}`);
        setTodo2(response.data);
    }
    const updateTodo2 = async () => {
        try {
            const response = await axios.put(
                `${API}/${todo.id}`, todo2);
            setTodo2(todo2.map((t) => (
                t.id === todo.id ? todo : t)));
            setTodo2({});
        } catch (error) {
            console.log(error)
            setErrorMessage(error.response.data.message);
        }

    };


    return (
        <div>
            <hr></hr>
            <h1>Todos from Server + Following Lab</h1>
        

            <h4>Retrieving Arrays</h4>
            <a href={API} className="btn btn-primary me-2">
                Get Todos
            </a>
            <hr></hr>
            {errorMessage && (
                <div className="alert alert-danger mb-2 mt-2">
                    {errorMessage}
                </div>
            )}

            <textarea
                onChange={(e) => setTodo({
                    ...todo,
                    description: e.target.value
                })}
                value={todo.description} type="text"
            />
            <input
                onChange={(e) => setTodo({
                    ...todo, due: e.target.value
                })}
                value={todo.due} type="date"
            />
            <label>
                <input
                    onChange={(e) => setTodo({
                        ...todo, completed: e.target.checked
                    })}
                    value={todo.completed} type="checkbox"
                />
                Completed
            </label>
            <input
                checked={todo.completed}
                type="checkbox" readOnly
            />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
            <br></br>

            <button
                onClick={() => deleteTodo(todo.id)}
                className="btn btn-danger float-end ms-2">
                Delete
            </button>
            

            <button onClick={updateTodo2}>
                Update Todo
            </button>



            {/* Lecture with professor */}
            <h2>AXIOS LAB With Professor </h2>
            <button onClick={postTodo} >
                Post Todo
            </button>
            <button className="btn btn-primary" onClick={createTodo}>Create Todo using .get</button>
            <button className="btn btn-primary" onClick={postTodo}>PostT Todo using .post</button>

            <button className="btn btn-warning" onClick={() => updateTodo(id, title)}>update Title using put</button>
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

            
            <h4>  Set ID HERE FOR CRUD METHOD : /Retrieving an Item from an Array by ID</h4>
            <input className="form-control"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <a href={`${API}/${id}`}
                className="btn btn-primary me-2">
                Get Todo by ID /This is where set ID to CRUD for LAB Do not press this if using CRUD
            </a>


            <h4>Creating new Items in an Array</h4>
            <a href={`${API}/create`}
                className="btn btn-primary me-2">
                Create Todo
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
                Update Title using .get  </a>
            <hr></hr>
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
            <hr></hr>



            <input
                value={todo.title}
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value
                })}
                className="form-control mb-2"
                type="text"
            />
            <h3>Updating an Item in an Array use TODO DELETE BUTTON TO SET ID </h3>
            <a
                href={`${API}/${todo.id}/title/${todo.title}`}
                className="btn btn-primary me-2" >
                Update Title to {todo.title} AND EXTRA CREDIT!
            </a>
            <hr></hr>

            <h3>Extra Credit Array Todo</h3>
            <h4>update description and checkbox for completed.</h4>
            <h4> USE SET CRUD TODO BELOW LIST to SET ID  </h4>



            <input className="form-control"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <a href={`${API}/${id}/description/${description}`}
                className="btn btn-primary me-2">
                Update description </a>


            <label>
                <input className="form-check-input" type="checkbox" onChange={(e) => {
                    fetch(`${API}/${id}/completed/${e.target.checked}`)
                    setTodo
                        ({...todo, completed: e.target.checked})
                }} />
                Press this to change completed status
            </label>


        </div >
    );
}
export default WorkingWithArrays;