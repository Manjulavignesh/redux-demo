import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    INCREMENTBY2: (state) => {
      state.value += 5;
    },
    DECREMENTBY2: (state) => {
      state.value -= 5;
    },
  },
});
export const {INCREMENTBY2, DECREMENTBY2}=counterSlice.actions;
export default counterSlice.reducer;