import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
// check HelloRedux.js for the useState version
const initialState = {
    count1: 0,
};

// Define a reducer for updating the state
const counter1Slice = createSlice({
    name: "counter1",
    initialState,
    reducers: {
        increment1: (state) => {
            state.count1++;
        },
        decremenet1: (state) => {
            state.count1--;
        },
        setCount1: (state, action) => {
            state.count1 = action.payload;
        }
    },
});

// export the function that can be used to update the state
export const { increment1, decremenet1, setCount1 } = counter1Slice.actions;
export default counter1Slice.reducer;
