import { configureStore, createSlice } from "@reduxjs/toolkit";

let loginStatus = createSlice({
  name: "loginStatus",
  initialState: "",
  reducers: {
    onchangeLoginStatus(state, value) {
      return value.payload;
    },
  },
});

export default configureStore({
  reducer: {
    loginStatus: loginStatus.reducer,
  },
});


export let {onchangeLoginStatus} = loginStatus.actions;