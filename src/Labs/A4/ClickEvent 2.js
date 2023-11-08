
function ClickEvent() {
    const hello = () => {
        alert("Hello World!");
    };
    const good = () => {
        alert("Life is Good!");
    };
    return (
        // use this syntax
        // and not this syntax. Otherwise you risk creating an
        // infinite loop

        // <button onClick={hello()}>  NOT ALLOWED!!!!
        <div>
            <h2>Click Event</h2>
            <button onClick={hello}>
                Click Hello 1 </button>
            <button onClick={() => hello()}>
                Click Hello 2 </button>
            <button
                onClick={() => {
                    hello();
                    good();
                }}
            >
                Click Hello 3
            </button>
        </div>
    );
}
export default ClickEvent;







// function ClickEvent() {

//     //function implementation
//     const handleClick = () => {
//         alert("You Click the button");
//     };

//     const alertAdd = (a, b) => {
//         alert(a + b);
//     };

//     return (
//         <div>
//             <h1>ClickEvent</h1>
//             first two button are the same
//             <button onClick={handleClick}>Click Me</button>
//             <br> </br>
//             <button onClick={() => handleClick}>Click Me</button>

//             <br></br>
//             <button onClick={() => alertAdd(1, 2)}>Click add, Embedded</button>
//         </div>
//     )

// }
// export default ClickEvent;