import axios from "axios";
// const COURSE_URL = "http://localhost:4000/api/courses";
// const MODULES_URL = "http://localhost:4000/api/modules";

const COURSE_URL = "https://kanbas-server-app.onrender.com/api/courses";
const MODULES_URL = "https://kanbas-server-app.onrender.com/api/modules";


export const  fetchModules = async () => {
    const response = await axios.get(`${MODULES_URL}`)
    return response.data;
};

export const  fetchModule = async (courseId) => {
    const response = await axios.get(`${COURSE_URL}/${courseId}/module`)
    return response.data;
};

// 147:55 
export const addNewModule = async(courseId, module) => {
    const response = await axios.post(`${COURSE_URL}/${courseId}`, module)
    
    return response.data;
}

// given the courseId retrieve all the lessons for that course
export const findLessondForCourse = async (courseId) => {
    const response = await axios.get(`${MODULES_URL}/${courseId}/lessons`)
    return response.data;
}
// find the particular lesson with the lessonId
export const findLessonWithLessonId = async (courseId, lessonId) => {
    const response = await axios.get(`${MODULES_URL}/${courseId}/lessons/${lessonId}`)
    return response.data;
}


// 147:55 
export const addLesson = async (courseId, lesson) => {
    const response = await axios.post(`${MODULES_URL}/${courseId}/lessons`, lesson)
    console.log(response.data)
    return response.data;
}

export const updateLesson = async (courseId, lesson) => {
    const response = await axios.put(`${MODULES_URL}/${courseId}`, lesson)
    return response.data;
}

export const deleteLesson = async (courseId,lesson) => {
   
    const response = await axios.delete(`${MODULES_URL}/${courseId}/lessons/${lesson._id}`)
    return response.data;
}