// export Dashboard server. we dont need the setCourse which lives in UI
import axios from "axios";
// const COURSE_URL = "https://kanbas-server-app.onrender.com/api/courses";
const COURSE_URL = "http://localhost:4000/api/courses";



export const fetchCourses = async () => {
    const response = await axios.get(`${COURSE_URL}`);
    // console.log(response.data);
    return response.data;

};

export const fetchCourse = async (id) => {
    const response = await axios.get(
        `${COURSE_URL}/${id}`
    );
    return response.data;
};



export const deleteCourse = async (id) => {
    console.log(id)
    const response = await axios.delete(
        `${COURSE_URL}/${id}`
    );
    // Consider handling the response here, if necessary
    return response.data;
};

export const addNewCourse = async (course) => {
    const response = await axios.post(`${COURSE_URL}`, course);
    console.log("New response.data:")
    console.log(response.data)
    return response.data;
}
// ask quesiton about course._id and  how the body()course is being sent to the server
export const updateCourse = async (course) => {
    const response = await axios.put(
        `${COURSE_URL}/${course._id}`, course
    );
    return response.data;
   
}
