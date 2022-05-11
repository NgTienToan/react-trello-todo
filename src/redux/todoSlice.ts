import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  todo: []
};


const todoSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {

  },
});

export const { } = todoSlice.actions;
export default todoSlice.reducer;