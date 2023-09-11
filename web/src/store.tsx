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

let sidebarStatus = createSlice({
  name : "sidebarStatus",
  initialState : "",
  reducers : {
    onChnageSidebarStatus(state,value){
      return value.payload;
    }
  }
})


export default configureStore({
  reducer: {
    loginStatus: loginStatus.reducer,
    sidebarStatus :sidebarStatus.reducer,
  },
});


export let {onchangeLoginStatus} = loginStatus.actions;
export let {onChnageSidebarStatus} = sidebarStatus.actions;