import React, { useState } from "react"; // import useState

function EventObject() { // (more on this later)
    const [event, setEvent] = useState(null); // initialize event
    // on click receive event
    const handleClick = (e) => {
        console.log(e); // log event object
        e.target = e.target.outerHTML; // replace target with HTML
        delete e.view; // to avoid circular reference
        setEvent(e); // set event object
        // so it can be displayed
    };
    return (
        // button that triggers event
        // when clicked passes event
        // to handler to update
        // variable
        <div>
            <h2>Event Object</h2>
            <button id="event-button"
                onClick={(e) => handleClick(e)}
                className="btn btn-primary">
                Display Event Object
            </button>
            <pre>{JSON.stringify(event, null, 2)}</pre>

        </div>
    );
}
export default EventObject;



// function EventObject() {
//     const handleEvent = (event) => {
//         console.log(event.target);
//         console.log(event.type);
//         console.log(event.clientX);
//         console.log(event.clientY);

//     };

//     return (
//         <div>
//             <button onClick={(event) => handleEvent}>Click Me</button>
//         </div>
//     );
// }
// export default EventObject;