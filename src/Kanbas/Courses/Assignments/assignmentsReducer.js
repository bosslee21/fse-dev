import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";


const initialState = {
    assignments: db.assignments,
    assignment: { title: "New Assignment 123", startDate: new Date().getTime().toString(), dueDate: new Date().getTime.toString() },
};


const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            state.assignments = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.assignments,
            ];
        },






        deleteAssignment: (state, action) => {
            console.log("DeleteAssignment")
            console.log(action.payload)
            state.assignments = state.assignments.filter(eachAssig => eachAssig._id !== action.payload.assignment._id);

        },
        // updateModule: (state, action) => {
        //     state.modules = state.modules.map((module) => {
        //         if (module._id === action.payload._id) {
        //             return action.payload;
        //         } else {
        //             return module;
        //         }
        //     });
        // },
        // setModule: (state, action) => {
        //     state.module = action.payload;
        // },
    },
});


export const { deleteAssignment,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;