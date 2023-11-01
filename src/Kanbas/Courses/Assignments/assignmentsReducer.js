import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";


const initialState = {
    assignments: db.assignments,
    assignment: { title: "New Assignment 123", startDate: " ", dueDate: " " },
};


const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        // addAssignment: (state, action) => {
        //     state.assignments = [
        //         { ...action.payload, _id: new Date().getTime().toString() },
        //         ...state.assignments,
        //     ];
        // },






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



        setAssignment: (state, action) => {
            console.log("SetAssignment")
            console.log(action.payload)
            const newAssignment = action.payload;
            state.assignment = newAssignment
        },
    },
});


export const { deleteAssignment, setAssignment
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;