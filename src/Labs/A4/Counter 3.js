import React, { useState } from "react";

function Counter() {

    // let [count, setCount] = useState(0);
    // let counterState = useState(0);
    // let updateFunction = counterState[1];
    let [count, setCount] = useState(2);

    const Increment = () => {
        setCount(count + 1);
        console.log(count);
        // updateFunction(counterState[0] + 1)
    };
    const Decrement = () => {
        // count = count - 1;
        // console.log(count);}
        setCount(count - 1);
        console.log(count);
    };
    return (
        <div>
            <h2>  Count: {count} </h2>
            <button onClick={() => Increment()}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>

        </div>
    );
}
export default Counter;