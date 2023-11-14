import axios from "axios";

export const fetchAssignment = async (id) => { 
    const response = await axios.get(
        `https://kanbas-server-app.onrender.com/api/assignments/${id}`
    );
    return response.data;
};
export const deleteAssignment = async (id) => {
    const response = await axios.delete(
        `https://kanbas-server-app.onrender.com/api/assignments/${id}`
    );
    return response.data
}