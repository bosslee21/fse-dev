// 1:55 Database programming with MongooseDB
import axios from "axios";
const API_BASE = process.env.REACT_APP_BASE_URL || "http://localhost:3000";
const USER_API = `${API_BASE}/api/users`;
export const signIn = async (credentials) => {
  const response = await axios.post(`${USER_API}/signin`, credentials);
  return response.data;
};
export const signOut = async () => {
  const response = await axios.post(`${USER_API}/signout`);
  return response.data;
};
export const account = async () => {
  const response = await axios.post(`${USER_API}/account`);
  return response.data;
};

export const createUser = async (user) => {
  const response = await axios.post(`${USER_API}`, user);
  return response.data;
};

export const findAllUsers = async () => {
  const response = await axios.get(USER_API);
  return response.data;
};

export const findUserById = async (userId) => {
  const response = await axios.get(`${USER_API}/${userId}`);
  return response.data;
};

export const updateUser = async (userId, user) => {
  const response = await axios.put(`${USER_API}/${userId}`, user);
  return response.data;
};

export const deleteUser = async (userId) => {
  const response = await axios.delete(`${USER_API}/${userId}`);
  return response.data;
};
