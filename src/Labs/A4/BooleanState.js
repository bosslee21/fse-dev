import React, { useState } from "react";
function BooleanState() {
    const [done, setDone] = useState(false);
    const handleClick = () => {
        setDone(!done);
    };

    return (
        <div>
            <p>Done: {done}</p>
            <button onClick={handleClick}>Click Me</button>
            <h3>{done ? "Done" : "not DONE"} </h3>
            <input type="checkbox" checked={done} onChange={handleClick}></input>
        </div>
    );
}
export default BooleanState;