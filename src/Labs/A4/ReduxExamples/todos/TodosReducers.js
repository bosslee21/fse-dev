import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        { id: "1", title: "Learn React" },
        { id: "2", title: "Learn Node" }
    ],
    todo: { title: "Learn Mondo DB" },
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodos = [
                ...state.todos,
                { ...action.payload, id: new Date().getTime().toString() },
            ];
            state.todos = newTodos;
            state.todo = { title: "" };
        },
        deleteTodo: (state, action) => {
            const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
            state.todos = newTodos;
        },
        updateTodo: (state, action) => {
            const newTodos = state.todos.map((item) =>
                item.id === action.payload.id ? action.payload : item
            );
            state.todos = newTodos;
            state.todo = { title: "" };
        },
        setTodo: (state, action) => {
            state.todo = action.payload;
        },
    },
});

export const { addTodo, deleteTodo, updateTodo, setTodo } = todosSlice.actions;
export default todosSlice.reducer;





// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     todos: [
//         { id: "1", title: "Learn React" },
//         { id: "2", title: "Learn Node" }
//     ],
//     todo: { title: "Learn Mondo DB" },
// };

// const todoSlice = createSlice({
//     name: "todo",
//     initialState,
//     reducers: {
//         addTodo: (state, action) => {
//             state.todos.push(action.payload);
//         },
//         deleteTodo: (state, action) => {
//             state.todos = state.todos.filter((todo) => todo.id !== action.payload);
//         },
//         updateTodo: (state, action) => {
//             state.todos = state.todos.map((todo) =>
//                 (todo.id === action.payload.id ? action.payload : todo));
//         },
//     },
// });

// export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
// export default todoSlice.reducer;



