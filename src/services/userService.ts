import { IUser } from "@/interfaces/IUser";
import instance from ".";

const getAllUser = async () => {
  try {
    const { data } = await instance.get("/users");
    return data;
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (dataBody: IUser) => {
  try {
    const res = await instance.post("/users", dataBody);
    if (res.status === 200) {
      return res.data;
    }
  } catch (error: any) {
    return { message: error.response.data };
  }
};

export { getAllUser, createUser };
