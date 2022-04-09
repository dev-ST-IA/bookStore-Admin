import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const setStatus = createAsyncThunk(
  "auth/setStatus",
  async (value = "available") => {
    const val = await value;
    return val;
  }
);
export const setUserDetails = createAsyncThunk(
  "auth/setUserDetails",
  async ({
    userTypeId = null,
    userType = null,
    contactNumber = null,
    status = null,
    rating = null,
    firstName = null,
    lastName = null,
  }) => {
    const val = await {
      userTypeId,
      userType,
      contactNumber,
      status,
      rating,
      firstName,
      lastName,
    };
    return val;
  }
);

const auth = createSlice({
  name: "auth",
  initialState: {
    userTypeId: null,
    userType: null,
    contactNumber: null,
    status: null,
    rating: null,
    firstName: null,
    lastName: null,
  },

  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(setUserDetails.fulfilled, (state, action) => {
        const {
          userTypeId,
          userType,
          contactNumber,
          status,
          rating,
          firstName,
          lastName,
        } = action.payload;
        state.contactNumber = contactNumber;
        state.userTypeId = userTypeId;
        state.userType = userType;
        state.status = status;
        state.rating = rating;
        state.firstName = firstName;
        state.lastName = lastName;
      })
      .addCase(setStatus.fulfilled, (state, action) => {
        state.status = action.payload;
      }),
});

export default auth.reducer;
