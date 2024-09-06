import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const loginUserApi = createAsyncThunk(
  "auth/login",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("users/login", formData);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);

export const registerUserApi = createAsyncThunk(
  "auth/register",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("users/signup", formData);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);
