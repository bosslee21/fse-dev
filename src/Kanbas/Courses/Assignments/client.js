import axios from "axios";


export const fetchAssignment = async (id) => { 
    const response = await axios.get(
        `http://localhost:4000/api/assignments/${id}`
    );
    return response.data;
};
export const deleteAssignment = async (id) => {
    const response = await axios.delete(
        `http://localhost:4000/api/assignments/${id}`
    );
    return response.data
}