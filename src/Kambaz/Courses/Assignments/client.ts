import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const MODULES_API = `${REMOTE_SERVER}/api/assignments`;

export const fetchAllAssignments = async (courseId: string) => {
    const response = await axios.get(`${MODULES_API}/${courseId}`);
    return response.data;
}

export const deleteAssignment = async (assignmentId: string) => {
    const {data} = await axios.delete(`${MODULES_API}/${assignmentId}`);
    return data;
};

export const updateAssignment = async (assignment: any) => {
    const { data } = await axios.put(`${MODULES_API}/${assignment._id}`, assignment);
    return data;
};

export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
    const response = await axios.post(`${MODULES_API}/${courseId}`, assignment);
    return response.data    ;
}