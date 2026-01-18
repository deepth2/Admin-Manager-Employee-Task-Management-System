import axios from "./axios";

interface TaskData {
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  projectId: string;
  assignedTo: string;
  status?: "todo" | "inprogress" | "completed";
}

export const getTasks = async () => {
  const res = await axios.get("/tasks");
  return res.data;
};

export const createTask = async (data: TaskData) => {
  const res = await axios.post("/tasks", data);
  return res.data;
};

export const updateTask = async (id: string, data: Partial<TaskData>) => {
  const res = await axios.put(`/tasks/${id}`, data);
  return res.data;
};

export const deleteTask = async (id: string) => {
  const res = await axios.delete(`/tasks/${id}`);
  return res.data;
};
