import React, {useState} from "react";

function ObjectState() {
    const [course, setCourse] = useState({
        name: "CS5610", 
        seats: 123,
        modules: 5,
        assignments: 20,
        isPublished: true,
        stateDate: new Date().toLocaleDateString(),
    });

    return(
        <div>
            <h2>Object State</h2>
        </div>
    );
}

export default ObjectState;