import React from "react";
import HelloRedux from "./HelloRedux";
import TodoList from "./todos/TodoList";
import Counter1 from "./counters/Counter1";
import Counter2 from "./counters/Counter2";

const ReduxExamples = () => {
    return (
        <div>
            <h2>Redux Examples !!!</h2>
            <TodoList />
            <HelloRedux />
            <Counter1 />
            <h2>Counter 222</h2>
            <Counter2 />
        </div>
    );
};

export default ReduxExamples;