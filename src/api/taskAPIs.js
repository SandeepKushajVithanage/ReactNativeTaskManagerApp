import axios from "axios";

import { HOST_ENDPOINT } from "./server";

export const getTasks = () => {
  return axios.get(`${HOST_ENDPOINT}/tasks`);
};

export const addTask = (payload) => {
  return axios.post(`${HOST_ENDPOINT}/tasks`, payload);
}

export const updateTask = ({ id, task }) => {
  console.log(id, task);
  return axios.put(`${HOST_ENDPOINT}/tasks/${id}`, task);
}

export const removeTask = (id) => {
  return axios.delete(`${HOST_ENDPOINT}/tasks/${id}`);
}