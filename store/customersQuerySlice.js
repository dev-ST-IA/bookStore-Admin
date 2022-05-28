import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const setSearch = createAsyncThunk(
  "customersQuerySlice/setSearch",
  async (value = null) => {
    const val = await value;
    return val;
  }
);

const customersQuerySlice = createSlice({
  name: "customersQuerySlice",
  initialState: {
    search: "",
    Page: 1,
    Size: 12,
    Sort: "name_asc",
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
  extraReducers: (builder) => {
    builder.addCase(setSearch.fulfilled, (state, action) => {
      state.search = action.payload;
    });
  },
});
export const { addPage, addSize, addSort, addRange } =
  customersQuerySlice.actions;
export default customersQuerySlice.reducer;
