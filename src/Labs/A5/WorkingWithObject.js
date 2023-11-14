import React, { useState } from "react";
function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });
    const URL = "https://kanbas-server-app.onrender.com/a5/assignment";
    return (
        <div>
            <h3>Working With Objects</h3>
            <h4>Retrieving Objects</h4>
            <a href="https://kanbas-server-app.onrender.com/a5/assignment"
                className="btn btn-primary me-2">
                Get Assignment
            </a>
            <h4>Retrieving Title</h4>
            <a
                href="https://kanbas-server-app.onrender.com/a5/assignment"
                className="btn btn-primary me-2">
                Get Title
            </a>

            <h4>Modifying Properties</h4>
            <a
                href={`${URL}/title/${assignment.title}`}
                className="btn btn-primary me-2 float-end"
            >
                Update Title
            </a>
            <input
                onChange={(e) => setAssignment({
                    ...assignment,
                    title: e.target.value
                })}
                value={assignment.title}
                className="form-control mb-2 w-75"
                type="text" />

                <h3>Extra Credit</h3>
            <a
                href={`${URL}/score/${assignment.score}`}
                className="btn btn-primary me-2 float-end"
            >
                Update Score
            </a>
            <input
                onChange={(e) => setAssignment({
                    ...assignment,
                    score: e.target.value
                })}
                value={assignment.score}
                className="form-control mb-2 w-75"
                type="text" />
            <label>
                <input className="form-check-input" type="checkbox" onChange={(e) => {
                    fetch(`${URL}/completed/${e.target.checked}`)
                    setAssignment
                        ({ ...assignment, completed: e.target.checked })
                }} />
                Press this to change completed status

            </label>










        </div>
    );
}
export default WorkingWithObjects;