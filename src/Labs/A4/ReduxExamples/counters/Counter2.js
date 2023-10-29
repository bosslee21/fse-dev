import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment2, decremenet2, setCount2 } from './Counter2Reducer';

function Counter2() {

    const { count2 } = useSelector((state) => state.counter2Reducer);
    const dispatch = useDispatch();


    return (
        <div>
            <h2>Counter {count2}</h2>
            <button onClick={() => dispatch(increment2())}>Increment2</button>
            <button onClick={() => dispatch(decremenet2())}>Decrement2</button>
            <button onClick={() => dispatch(setCount2(0))}>Reset2</button>


        </div>

    );



}

export default Counter2;