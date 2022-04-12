import { createSlice } from "@reduxjs/toolkit";

const modelSlice = createSlice({
  name: "modelSlice",
  initialState: {
    createOpen: false,
    editOpen: false,
    deleteOpen: false,
  },

  reducers: {
    setCreateOpen: (state, action) => {
      state.createOpen = action.payload;
    },
    setEditOpen: (state, action) => {
      state.editOpen = action.payload;
    },
    setDeleteOpen: (state, action) => {
      state.deleteOpen = action.payload;
    },
  },
});
export const { setCreateOpen, setDeleteOpen, setEditOpen } = modelSlice.actions;
export default modelSlice.reducer;
