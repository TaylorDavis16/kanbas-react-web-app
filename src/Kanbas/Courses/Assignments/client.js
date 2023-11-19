import axios from "axios";
const COURSES_URL = "https://kanbas-node-server-n1ky.onrender.com/api/courses";

export const sendGetAssignment = async (cid) => {
  const response = await axios.get(`${COURSES_URL}/${cid}/Assignments`);
  return response.data;
};

export const sendAddAssignment = async (assignment) => {
  const response = await axios.post(`${COURSES_URL}/${assignment.course}/Assignments`, assignment);
  return response.data;
};

export const sendUpdateAssignment = async (assignment) => {
  const response = await axios.put(
    `${COURSES_URL}/${assignment.course}/Assignments/${assignment._id}`,
    assignment
  );
  return response.data;
};

export const sendDeleteAssignment = async (assignment) => {
  const response = await axios.delete(
    `${COURSES_URL}/${assignment.course}/Assignments/${assignment._id}`
  );
  return response.data;
};
