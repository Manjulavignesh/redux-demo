import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increament: (state) => {
      state.value += 5;
    },
    decreament: (state) => {
      state.value -= 5;
    },
  },
});
export const {increament, decreament}=counterSlice.actions;
export default counterSlice.reducer;