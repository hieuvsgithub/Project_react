import { IUser } from "@/interfaces/IUser";
import { createUser, getAllUser } from "@/services/userService";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUser = createAsyncThunk<IUser[]>(
  "users/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      return getAllUser();
    } catch (error: any) {
      return rejectWithValue(error.message || "Cannot to fetch user");
    }
  }
);
const addUser = createAsyncThunk<IUser, IUser>(
  "users/addUser",
  async (dataBody, { rejectWithValue }) => {
    try {
      return createUser(dataBody);
    } catch (error: any) {
      return rejectWithValue(error.message || "Cannot to fetch user");
    }
  }
);

export { fetchUser, addUser };
