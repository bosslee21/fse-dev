function EventObject() {
    const handleEvent = (event) => {
        console.log(event.target);
        console.log(event.type);
        console.log(event.clientX);
        console.log(event.clientY);

    };

    return (
        <div>
            <button onClick={(event) => handleEvent}>Click Me</button>
        </div>
    );
}
export default EventObject;