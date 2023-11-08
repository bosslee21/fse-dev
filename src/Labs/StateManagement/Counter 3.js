import { useState } from "react";

function Counter() {
    // let count = 0;  variable, mutator to change the variable.
    const [count, SetCount] = useState(0);
    const increment = () => SetCount(count + 1);
    const decrement = () => SetCount(count - 1);

    return (
        <div>

            <button onClick={decrement}>Decrement</button>
            {/* <span>{count}</span> */}
            <h2 onClick={() => alert("Clicked!")}>Counter: {count}</h2>
            <button onClick={increment}>Increase</button>
        </div>
    );
}
export default Counter;