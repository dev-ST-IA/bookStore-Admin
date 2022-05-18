import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const setSearch = createAsyncThunk(
  "booksQuerySlice/setSearch",
  async (value = null) => {
    const val = await value;
    return val;
  }
);

const booksQuerySlice = createSlice({
  name: "booksQuerySlice",
  initialState: {
    search: "",
    category: -1,
    Page: 1,
    Size: 10,
    Sort: "popular",
  },

  reducers: {
    addSort: (state, action) => {
      state.Sort = action.payload;
    },
    addCategory: (state, action) => {
      state.category = action.payload;
    },
    addPage: (state, action) => {
      state.Page = action.payload;
    },
    addSize: (state, action) => {
      state.Size = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setSearch.fulfilled, (state, action) => {
      state.search = action.payload;
    });
  },
});
export const { addCategory, addPage, addSize, addSort } =
  booksQuerySlice.actions;
export default booksQuerySlice.reducer;
