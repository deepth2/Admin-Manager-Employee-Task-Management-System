import axios from "./axios";

interface ProjectData {
  name: string;
  description: string;
  managerId: string;
  employeeIds: string[];
}

export const getProjects = async () => {
  const res = await axios.get("/projects");
  return res.data;
};

export const createProject = async (data: ProjectData) => {
  const res = await axios.post("/projects", data);
  return res.data;
};

export const updateProject = async (id: string, data: Partial<ProjectData>) => {
  const res = await axios.put(`/projects/${id}`, data);
  return res.data;
};

export const deleteProject = async (id: string) => {
  const res = await axios.delete(`/projects/${id}`);
  return res.data;
};
