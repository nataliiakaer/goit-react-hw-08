import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instanceMockapi = axios.create({
  baseURL: "https://66d3678a184dce1713d01e79.mockapi.io/"
})

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await instanceMockapi.get("/contacts");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post(`/contacts`, contact);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
