import React, { useState } from "react";

function Counter() {

    // let [count, setCount] = useState(0);
    // let counterState = useState(0);
    // let updateFunction = counterState[1];
    let [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1);
        // updateFunction(counterState[0] + 1)
    };
    const Decrement = () => {
        // count = count - 1;
        // console.log(count);}
        setCount(count - 1);
    };
    return (
        <div>
            <p> Count: {count}</p>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>

        </div>
    );
}
export default Counter;