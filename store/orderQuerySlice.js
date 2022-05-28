import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const setSearch = createAsyncThunk(
  "ordersQuerySlice/setSearch",
  async (value = null) => {
    const val = await value;
    return val;
  }
);

const ordersQuerySlice = createSlice({
  name: "ordersQuerySlice",
  initialState: {
    search: "",
    category: -1,
    Page: 1,
    Size: 12,
    Sort: "popular",
    start: null,
    end: null,
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
export const { addCategory, addPage, addSize, addSort, addRange } =
  ordersQuerySlice.actions;
export default ordersQuerySlice.reducer;
