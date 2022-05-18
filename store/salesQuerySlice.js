import { createSlice } from "@reduxjs/toolkit";

const salesQuerySlice = createSlice({
  name: "salesQuerySlice",
  initialState: {
    Page: 1,
    Size: 12,
    Sort: "date_asc",
    start: null,
    end: null,
  },

  reducers: {
    addSort: (state, action) => {
      state.Sort = action.payload;
    },
    addPage: (state, action) => {
      state.Page = action.payload;
    },
    addSize: (state, action) => {
      state.Size = action.payload;
    },
    addRange: (state, action) => {
      state.start = action.payload.start;
      state.end = action.payload.end;
    },
  },
});
export const { addPage, addSize, addSort, addRange } = salesQuerySlice.actions;
export default salesQuerySlice.reducer;
