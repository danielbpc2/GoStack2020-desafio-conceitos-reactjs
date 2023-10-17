import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export const getRepositories = async () => {
  const response = await api.get("/repositories");
  return response.data;
};

export const addRepository = async (repository) => {
  const response = await api.post("/repositories", repository);
  return response.data;
};

export const removeRepository = async (id) => {
  const response = await api.delete(`/repositories/${id}`);
  return response.status;
};

export default api;
