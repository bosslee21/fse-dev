import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment1, decremenet1, setCount1 } from './Counter1Reducer';


function Counter1() {
    // const [count, setCount] = useState(0);
    // const Increment = () => setCount(count + 1);
    // const Decrement = () => setCount(count - 1);
    const { count1 } = useSelector((state) => state.counter1Reducer);
    const dispatch = useDispatch();
    const { count2 } = useSelector((state) => state.counter2Reducer);
    return (
        <div>
            <h2>Counter1 Count : {count1}</h2>
            <button onClick={() => dispatch(increment1())}>Increment1</button>
            <button onClick={() => dispatch(decremenet1())}>Decrement1</button>
            <button onClick={() => dispatch(setCount1())}>Reset1</button>
            <h2>{count1}</h2>

            <h2>count2 :::: {count2}</h2>
        </div>
    );



}

export default Counter1;