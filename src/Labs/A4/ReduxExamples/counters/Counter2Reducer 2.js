import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
// check HelloRedux.js for the useState version
const initialState = {
    count2: 0,
};

// Define a reducer for updating the state
const counter2Slice = createSlice({
    name: "counter2",
    initialState,
    reducers: {
        increment2: (state) => {
            state.count2++;
        },
        decremenet2: (state) => {
            state.count2--;
        },
        setCount2: (state, action) => {
            state.count2 = action.payload;
        }
    },
});

// export the function that can be used to update the state
export const { increment2, decremenet2, setCount2 } = counter2Slice.actions;
export default counter2Slice.reducer;
