import { configureStore } from "@reduxjs/toolkit";
import HelloReducer from "./A4/ReduxExamples/HelloReducer";
import counter1Reducer from "./A4/ReduxExamples/counters/Counter1Reducer";
import counter2Reducer from "./A4/ReduxExamples/counters/Counter2Reducer";
import todosReducer from "./A4/ReduxExamples/todos/TodosReducers";
import addReducer from "./A4/ReduxExamples/AddRedux/addReducer";
// Just like Json Database we store Reducer in a store
const store = configureStore({
    reducer: {
        Hello: HelloReducer, // hello is the name of the reducer alias(will be called)
        // HelloReducer,
        counter1Reducer,
        counter2Reducer,
        todosReducer,
        addReducer
    },
});


export default store;