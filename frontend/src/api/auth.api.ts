import axios from "./axios";

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: "admin" | "manager" | "employee";
}

export const loginUser = async (data: LoginData) => {
  const res = await axios.post("/auth/login", data);
  return res.data;
};

export const registerUser = async (data: RegisterData) => {
  const res = await axios.post("/auth/register", data);
  return res.data;
};
