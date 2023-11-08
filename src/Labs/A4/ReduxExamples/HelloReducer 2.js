import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
// check HelloRedux.js for the useState version
const initialState = {
    message: "Hello World!@#$%^",
};

// Define a reducer for updating the state
const helloSlice = createSlice({
    name: "hello",
    initialState,
    reducers: {
        // setmessage can be whatever you want to call it. It is the function that will be called to update the state
        // state,action are set the parameters that will be passed to the function
        // state.message = is set in InitialState
        setMessage: (state, action) => {
            state.message = action.payload;
        },
    },
});

// export the function that can be used to update the state
export const { setMessage } = helloSlice.actions;
export default helloSlice.reducer;
