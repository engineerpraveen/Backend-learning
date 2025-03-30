import { axiosInstance } from "./index";

export const registerUser = async (values) => {
  try {
    const response = await axiosInstance.post("/api/users/register", values);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (values) => {
  try {
    const response = await axiosInstance.post("/api/users/login", values);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
