import axios from "axios";
const COURSE_URL = "http://localhost:4000/api/courses";
const MODULES_URL = "http://localhost:4000/api/modules";

export const  fetchModules = async (cid) => {
    const response = await axios.get(`"http://localhost:4000/api/modules/${cid}"`)
    return response.data;
};

export const findLessonForCourse = async (courseId) => {
    const response = await axios.get(`${COURSE_URL}/${courseId}/lessons`)
    return response.data;
}
export const addModule = async (courseId, module) => {
    const response = await axios.post(`${COURSE_URL}/${courseId}/modules`, module)
    return response.data;
}

export const updateModule = async (courseId, module) => {
    const response = await axios.put(`${MODULES_URL}/${courseId}`, module)
    return response.data;
}

export const deleteModule = async (courseId) => {
    const response = await axios.delete(`${MODULES_URL}/${courseId}`)
    return response.data;
}
